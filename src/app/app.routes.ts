import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Importa el HomeComponent

export const APP_ROUTES: Routes = [
  {
    path: 'empresas',
    loadChildren: () => import('./features/empresa/empresa.module').then(m => m.EmpresaModule)
  },
  {
    path: 'empleados',
    loadChildren: () => import('./features/empleado/empleado.module').then(m => m.EmpleadoModule)
  },
  { path: '', component: HomeComponent, pathMatch: 'full' }, 
  { path: '**', redirectTo: '' }
];
