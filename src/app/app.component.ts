import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./component/navbar/navbar.component";
import { HomeComponent } from "./component/home/home.component";
import { SkillstreeComponent } from "./component/skillstree/skillstree.component";
import { ContatoComponent } from "./component/contact/contact.component";
import { AboutComponent } from "./component/about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    SkillstreeComponent,
    ContatoComponent,
    AboutComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nome-do-projeto';
}
