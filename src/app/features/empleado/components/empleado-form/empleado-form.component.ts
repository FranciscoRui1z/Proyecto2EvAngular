import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from '../../../../core/services/empleado.service';
import { Empleado } from '../../../../core/models/empleado.model';
import { EmpresaService } from '../../../../core/services/empresa.service';
import { Empresa } from '../../../../core/models/empresa.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css'],
  standalone: true,
  imports: [FormsModule,CommonModule]
})
export class EmpleadoFormComponent implements OnInit {
  empleado: Empleado = { id: 0, nombre: '', puesto: '', empresaId: 1 };
  empresas: Empresa[] = [];

  constructor(
    private empleadoService: EmpleadoService,
    private empresaService: EmpresaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.empresaService.getEmpresas().subscribe(empresas => {
      this.empresas = empresas;
    });
  }

  agregarEmpleado(): void {
    this.empleadoService.agregarEmpleado(this.empleado);
    this.router.navigate(['/empleado']);
  }
}
