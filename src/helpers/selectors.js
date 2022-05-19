export function getAppointmentsForDay(state, day) {
  const appointmentDay = state.days.filter(x => x.name === day);

  if (appointmentDay.length === 0) return appointmentDay;

  return appointmentDay[0].appointments.map(x => state.appointments[x]);
}