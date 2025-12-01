import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  toProjectC() {
    this.router.navigate(['/projetoC'], { queryParams: { foco: 'projeto-detail-c' } });
  }
  toProjectB() {
    this.router.navigate(['/projetoB'], { queryParams: { foco: 'projeto-detail-b' } });
  }
  toProjectA() {
    this.router.navigate(['/projetoA'], { queryParams: { foco: 'projeto-detail-a' } });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['foco'];
      if (id) {
        setTimeout(() => {
          const el = document.getElementById(id);
          el?.scrollIntoView({ behavior: 'smooth' });
          el?.focus();
        }, 50);
      }
    });
  }

}
