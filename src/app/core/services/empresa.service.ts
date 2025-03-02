import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Empresa } from '../models/empresa.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmpresaService {
  constructor(private api: ApiService) {}

  getEmpresas(): Observable<Empresa[]> {
    return this.api.getEmpresas();
  }
}
