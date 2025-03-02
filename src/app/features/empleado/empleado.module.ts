import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { EmpleadoRoutingModule } from './empleado-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, EmpleadoRoutingModule,EmpleadoListComponent,EmpleadoFormComponent],
  exports: [EmpleadoFormComponent, EmpleadoListComponent],
})
export class EmpleadoModule {}
