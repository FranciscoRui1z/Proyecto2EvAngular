import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../../../core/services/empleado.service';
import { Empleado } from '../../../../core/models/empleado.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class EmpleadoListComponent implements OnInit {
  empleadosOriginales: Empleado[] = [];
  empleados: Empleado[] = [];
  empleadoSeleccionado: Empleado | null = null;
  indiceSeleccionado: number | null = null;
  editandoIndice: number | null = null;
  empleadoEditado: Empleado | null = null;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe(empleados => {
      this.empleadosOriginales = empleados;
      this.empleados = [...this.empleadosOriginales];
    });
  }

  seleccionarEmpleado(empleado: Empleado, indice: number): void {
    this.empleadoSeleccionado = empleado;
    this.indiceSeleccionado = indice;
  }

  filtrarPorPuesto(): void {
    if (this.empleadoSeleccionado && this.empleadoSeleccionado.puesto) {
      this.empleados = this.empleadosOriginales.filter(e => e.puesto === this.empleadoSeleccionado?.puesto);
    }
  }

  borrarSeleccionado(): void {
    if (this.indiceSeleccionado !== null) {
      this.empleadosOriginales.splice(this.indiceSeleccionado, 1);
      this.empleados = [...this.empleadosOriginales];
      this.empleadoSeleccionado = null;
      this.indiceSeleccionado = null;
    }
  }

  alterarSeleccionado(indice: number, empleado: Empleado): void {
    this.editandoIndice = indice;
    this.empleadoEditado = { ...empleado };
  }

  guardarEmpleadoEditado(): void {
    if (this.editandoIndice !== null && this.empleadoEditado) {
      this.empleadosOriginales[this.editandoIndice] = { ...this.empleadoEditado };
      this.empleados = [...this.empleadosOriginales];
      this.editandoIndice = null;
      this.empleadoEditado = null;
    }
  }

  cancelarEdicion(): void {
    this.editandoIndice = null;
    this.empleadoEditado = null;
  }

  actualizarNombre(nombre: string): void {
    if (this.empleadoEditado) {
      this.empleadoEditado.nombre = nombre;
    }
  }

  actualizarPuesto(puesto: string): void {
    if (this.empleadoEditado) {
      this.empleadoEditado.puesto = puesto;
    }
  }

  actualizarDepartamento(departamento: string): void {

   let departamento2 = Number(departamento);

    if (this.empleadoEditado) {
      this.empleadoEditado.empresaId = departamento2;
    }
  }
}
