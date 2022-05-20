export function getAppointmentsForDay(state, day) {
  const appointmentDay = state.days.filter(x => x.name === day);
  if (!appointmentDay.length) return appointmentDay;
  return appointmentDay[0].appointments.map(x => state.appointments[x]);
}

export function getInterview(state, interview) {
  if (!interview) return null;
  return {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]
  };
}

export function getInterviewersForDay(state, day) {
  const appointmentDay = state.days.filter(x => x.name === day);
  if (!appointmentDay.length) return appointmentDay;
  return appointmentDay[0].interviewers.map(x => state.interviewers[x]);
}