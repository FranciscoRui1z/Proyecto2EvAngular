import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'empresas',
    loadChildren: () => import('./features/empresa/empresa.module').then(m => m.EmpresaModule)
  },
  {
    path: 'empleados',
    loadChildren: () => import('./features/empleado/empleado.module').then(m => m.EmpleadoModule)
  },
  { path: '', redirectTo: 'empresas', pathMatch: 'full' },
  { path: '**', redirectTo: 'empresas' }

];
