import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmpresaListComponent } from './components/empresa-list/empresa-list.component';
import { EmpresaRoutingModule } from './empresa-routing.module'; // Importa el módulo de enrutamiento

@NgModule({
  imports: [CommonModule, RouterModule, EmpresaRoutingModule, EmpresaListComponent], 
  exports: [EmpresaListComponent],
})
export class EmpresaModule {}
