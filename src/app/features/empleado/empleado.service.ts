// empleado.service.ts
import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Empleado } from '../../core/models/empleado.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmpleadoService {
  private endpoint = 'empleados';

  constructor(private api: ApiService) {}

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
}
