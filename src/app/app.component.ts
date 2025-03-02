import { Component } from '@angular/core';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <div class="container mt-4">
      <router-outlet></router-outlet>
    </div>
  `,
  imports: [NavbarComponent, RouterModule]
})
export class AppComponent {}
