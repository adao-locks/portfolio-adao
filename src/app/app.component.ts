import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./component/navbar/navbar.component";
import { SocialComponent } from "./component/social/social.component";

@Component({
    selector: 'app-root',
    imports: [
    RouterOutlet,
    NavbarComponent,
    SocialComponent
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio | Eduardo Adao Locks';
}
