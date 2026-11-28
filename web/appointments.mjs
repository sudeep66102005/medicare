const appointments = [
  { id: 'A001', patientId: 'P001', doctorId: 'D001', date: '2027-01-15' },
  { id: 'A002', patientId: 'P002', doctorId: 'D002', date: '2027-01-16' },
];

export function listPatientAppointments(patientId) {
  return appointments.filter((appointment) => appointment.patientId === patientId);
}
