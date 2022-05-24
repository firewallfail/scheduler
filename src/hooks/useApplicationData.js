import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const updateSpots = function(state, appointments) {

    const shallowDays = [...state.days];
    const shallowDay = [...state.days.filter(x => x.name === state.day)];

    let spots = 0;

    //count any space that's null
    for (const appointment of shallowDay[0].appointments) {
      if (!appointments[appointment].interview) {
        spots++;
      };
    }

    const index = state.days.findIndex(day => day.name === state.day);

    shallowDays[index] =
    {
      ...shallowDays[index],
      spots
    }

    return shallowDays;
  };

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = updateSpots(state, appointments);
    return axios.put(`/api/appointments/${id}`, { interview })
      .then(res => setState({ ...state, appointments, days }))
  };

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = updateSpots(state, appointments);
    return axios.delete(`/api/appointments/${id}`)
      .then(res => setState({ ...state, appointments, days }))
  }

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("api/days"),
      axios.get("api/appointments"),
      axios.get("api/interviewers")
    ])
      .then((all) => {
        setState(prev => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data
        }));
      })
      .catch((err) => console.log(err));
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}