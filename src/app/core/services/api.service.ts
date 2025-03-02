import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa.model';
import { Empleado } from '../models/empleado.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'assets/';

  constructor(private http: HttpClient) {}

  getEmpresas(): Observable<Empresa[]> {
    console.log('Fetching empresas.json');
    return this.http.get<Empresa[]>(`${this.baseUrl}empresas.json`);
  }

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.baseUrl}empleados.json`);
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${endpoint}`, body);
  }

  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${endpoint}`, body);
  }

  delete(endpoint: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${endpoint}`);
  }
}
