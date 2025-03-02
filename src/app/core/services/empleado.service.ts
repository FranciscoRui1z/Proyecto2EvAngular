import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Empleado } from '../models/empleado.model';
import { ApiService } from '../../core/services/api.service'; // Importa ApiService

@Injectable({ providedIn: 'root' })
export class EmpleadoService {
  private endpoint = 'empleados'; // Usa el endpoint para ApiService
  private empleados: Empleado[] = []; // Para mantener los datos en memoria

  constructor(private http: HttpClient, private api: ApiService) {
    this.getEmpleados().subscribe(empleados => {
      this.empleados = empleados;
    });
  }

  getEmpleados(): Observable<Empleado[]> {
    return this.api.getEmpleados();
  }

  crearEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.api.post<Empleado>(this.endpoint, empleado);
  }

  actualizarEmpleado(id: number, empleado: Empleado): Observable<Empleado> {
    return this.api.put<Empleado>(`${this.endpoint}/${id}`, empleado);
  }

  eliminarEmpleado(id: number): Observable<void> {
    return this.api.delete(`${this.endpoint}/${id}`);
  }

  agregarEmpleado(empleado: Empleado): void {
    this.empleados.push({ ...empleado, id: this.empleados.length + 1 });
  }
}
