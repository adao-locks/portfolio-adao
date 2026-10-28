import { Component } from '@angular/core';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProfileComponent } from './component/profile/profile.component';
import { HomeComponent } from './component/home/home.component';
import { CasesComponent } from './component/cases/cases.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ExperiencesComponent } from './component/experiences/experiences.component';
import { EducationComponent } from './component/education/education.component';
import { SkillstreeComponent } from './component/skillstree/skillstree.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { MessageComponent } from './component/message/message.component';

@Component({
    selector: 'app-root',
    imports: [
        NavbarComponent,
        ProfileComponent,
        HomeComponent,
        CasesComponent,
        ProjectsComponent,
        ExperiencesComponent,
        EducationComponent,
        SkillstreeComponent,
        AboutComponent,
        ContactComponent,
        FooterComponent,
        MessageComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {}
