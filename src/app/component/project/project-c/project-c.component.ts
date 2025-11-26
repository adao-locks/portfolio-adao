import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-c',
  imports: [],
  templateUrl: './project-c.component.html',
  styleUrl: './project-c.component.css',
})
export class ProjectCComponent {

  constructor(private router: Router) {}

  backToPortfolio() {
    this.router.navigate(['/']);
  }

}
