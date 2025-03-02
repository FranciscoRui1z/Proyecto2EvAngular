import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../../../core/services/empresa.service';
import { Empresa } from '../../../../core/models/empresa.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css'],
    standalone: true,
    imports: [FormsModule,CommonModule]
})
export class EmpresaListComponent implements OnInit {
  empresas: Empresa[] = [];

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.empresaService.getEmpresas().subscribe(empresas => {
      this.empresas = empresas;
    });
  }
}
