import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-c',
  imports: [],
  templateUrl: './project-c.component.html',
  styleUrl: './project-c.component.css',
})
export class ProjectCComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  backToPortfolio() {
    this.router.navigate(['/'], { queryParams: { foco: 'projetos' } });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['foco'];

      if (id && isPlatformBrowser(this.platformId)) {  // ← prevent SSR crash
        setTimeout(() => {
          const el = document.getElementById(id);
          el?.scrollIntoView({ behavior: 'smooth' });
          el?.focus();
        }, 50);
      }
    });
  }
}
