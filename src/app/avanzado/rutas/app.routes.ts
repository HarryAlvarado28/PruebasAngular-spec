import { Routes } from '@angular/router';
import { IncrementadorComponent } from 'src/app/intermedio2/incrementador/incrementador.component';
import { MedicoComponent } from 'src/app/intermedio2/medico/medico.component';
import { HospitalComponent } from 'src/app/intermedio2/hospital/hospital.component';

export const RUTAS: Routes = [
  { path: 'hospital', component: HospitalComponent },
  { path: 'medico/:id', component: MedicoComponent },
  { path: '**', component: IncrementadorComponent }
];
