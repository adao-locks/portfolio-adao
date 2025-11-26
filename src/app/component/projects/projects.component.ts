import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor(private router: Router) {}

  toProjectC() {
    this.router.navigate(['/projetoC']);
  }
  toProjectB() {
    this.router.navigate(['/projetoB']);
  }
  toProjectA() {
    this.router.navigate(['/projetoA']);
  }

}
