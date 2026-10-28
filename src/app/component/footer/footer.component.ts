import { Component, inject } from '@angular/core';
import { PROFILE, copyToClipboard } from '../../data/profile';
import { MessageService } from '../../service/message.service';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.component.html'
})
export class FooterComponent {
  readonly profile = PROFILE;
  readonly year = new Date().getFullYear();

  private messageService = inject(MessageService);

  async copyEmail() {
    const ok = await copyToClipboard(this.profile.email);
    this.messageService.showMessage(ok ? `E-mail copiado: ${this.profile.email}` : `Copie o e-mail: ${this.profile.email}`);
  }
}
