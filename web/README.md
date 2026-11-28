# Medicare Web

This folder contains three JavaScript demo modules for a clinic website. They use fictional sample data and run without dependencies.

| Module | Demo |
| --- | --- |
| `patients.mjs` | Find a sample patient by ID. |
| `doctors.mjs` | List sample doctors by specialty. |
| `appointments.mjs` | List sample appointments for a patient. |

## Try it

From the repository root, run these commands with Node.js.

```sh
node --input-type=module -e "import { findPatient } from './web/patients.mjs'; console.log(findPatient('P001'));"
node --input-type=module -e "import { listDoctorsBySpecialty } from './web/doctors.mjs'; console.log(listDoctorsBySpecialty('General Medicine'));"
node --input-type=module -e "import { listPatientAppointments } from './web/appointments.mjs'; console.log(listPatientAppointments('P001'));"
```
