//Grab the day the user is on and return the appointments for that day
export function getAppointmentsForDay(state, day) {
  const appointmentDay = state.days.filter(x => x.name === day);
  if (!appointmentDay.length) return appointmentDay;
  return appointmentDay[0].appointments.map(x => state.appointments[x]);
}

//Return the information for an individual interview
export function getInterview(state, interview) {
  if (!interview) return null;
  return {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]
  };
}

//Return a list of interviewers for a given day
export function getInterviewersForDay(state, day) {
  const appointmentDay = state.days.filter(x => x.name === day);
  if (!appointmentDay.length) return appointmentDay;
  return appointmentDay[0].interviewers.map(x => state.interviewers[x]);
}