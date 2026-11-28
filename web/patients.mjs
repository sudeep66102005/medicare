const patients = [
  { id: 'P001', name: 'Demo Patient One' },
  { id: 'P002', name: 'Demo Patient Two' },
];

export function findPatient(patientId) {
  return patients.find((patient) => patient.id === patientId) ?? null;
}
