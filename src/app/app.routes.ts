import { Routes } from '@angular/router';
import { ProjectAComponent } from './component/project/project-a/project-a.component';
import { ProjectBComponent } from './component/project/project-b/project-b.component';
import { ProjectCComponent } from './component/project/project-c/project-c.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';

export const routes: Routes = [
  { path: '', component: PortfolioComponent},
  { path: 'projetoA', component: ProjectAComponent},
  { path: 'projetoB', component: ProjectBComponent},
  { path: 'projetoC', component: ProjectCComponent},
  { path: '**', redirectTo: '' }
];
