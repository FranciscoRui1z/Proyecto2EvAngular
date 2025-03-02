import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../../../core/services/empleado.service';
import { Empleado } from '../../../../core/models/empleado.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css'],
  standalone: true,
  imports: [FormsModule,CommonModule]
})
export class EmpleadoListComponent implements OnInit {
  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe(empleados => {
      this.empleados = empleados;
    });
  }
}
