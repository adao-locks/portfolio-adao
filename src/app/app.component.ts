import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./component/navbar/navbar.component";
import { HomeComponent } from "./component/home/home.component";
import { SkillstreeComponent } from "./component/skillstree/skillstree.component";
import { AboutComponent } from "./component/about/about.component";
import { ProjectsComponent } from "./component/projects/projects.component";
import { SocialComponent } from "./component/social/social.component";
import { ContactComponent } from './component/contact/contact.component';
import { MessageComponent } from "./component/message/message.component";
import { ExperiencesComponent } from "./component/experiences/experiences.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    SkillstreeComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent,
    SocialComponent,
    MessageComponent,
    ExperiencesComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio | Eduardo Adao Locks';
}
