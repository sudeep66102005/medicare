const doctors = [
  { id: 'D001', name: 'Dr. Demo Rao', specialty: 'General Medicine' },
  { id: 'D002', name: 'Dr. Demo Mehta', specialty: 'Orthopedics' },
];

export function listDoctorsBySpecialty(specialty) {
  return doctors.filter((doctor) => doctor.specialty === specialty);
}
