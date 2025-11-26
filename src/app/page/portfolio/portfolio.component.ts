import { Component } from '@angular/core';
import { HomeComponent } from "../../component/home/home.component";
import { AboutComponent } from "../../component/about/about.component";
import { SkillstreeComponent } from "../../component/skillstree/skillstree.component";
import { ExperiencesComponent } from "../../component/experiences/experiences.component";
import { ProjectsComponent } from "../../component/projects/projects.component";
import { ContactComponent } from "../../component/contact/contact.component";

@Component({
  selector: 'app-portfolio',
  imports: [HomeComponent, AboutComponent, SkillstreeComponent, ExperiencesComponent, ProjectsComponent, ContactComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {

}
