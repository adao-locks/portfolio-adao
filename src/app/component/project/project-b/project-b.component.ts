import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-b',
  imports: [],
  templateUrl: './project-b.component.html',
  styleUrl: './project-b.component.css',
})
export class ProjectBComponent {

  constructor(private router: Router) {}

  backToPortfolio() {
    this.router.navigate(['/']);
  }

}
