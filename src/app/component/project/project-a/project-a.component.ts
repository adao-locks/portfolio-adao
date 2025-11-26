import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-a',
  imports: [],
  templateUrl: './project-a.component.html',
  styleUrl: './project-a.component.css',
})
export class ProjectAComponent {

  constructor(private router: Router) {}

  backToPortfolio() {
    this.router.navigate(['/']);
  }

}
