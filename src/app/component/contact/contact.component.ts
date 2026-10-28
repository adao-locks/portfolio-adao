import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import emailjs from '@emailjs/browser';
import { PROFILE, copyToClipboard } from '../../data/profile';
import { MessageService } from '../../service/message.service';

type Status = 'idle' | 'sending' | 'sent' | 'failed';

@Component({
    selector: 'app-contact',
    imports: [FormsModule],
    templateUrl: './contact.component.html'
})
export class ContactComponent {
  readonly profile = PROFILE;

  name = '';
  email = '';
  message = '';
  submitted = false;
  status: Status = 'idle';

  private messageService = inject(MessageService);

  get nameError() {
    return this.name.trim().length < 2 ? 'Informe seu nome.' : '';
  }

  get emailError() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email.trim()) ? '' : 'Use um e-mail no formato nome@empresa.com.';
  }

  get messageError() {
    return this.message.trim().length < 10 ? 'Escreva pelo menos uma frase.' : '';
  }

  async copyEmail() {
    const ok = await copyToClipboard(this.profile.email);
    this.messageService.showMessage(ok ? `E-mail copiado: ${this.profile.email}` : `Copie o e-mail: ${this.profile.email}`);
  }

  sendEmail() {
    this.submitted = true;
    if (this.nameError || this.emailError || this.messageError || this.status === 'sending') return;

    this.status = 'sending';
    const templateParams = {
      name: this.name,
      email: this.email,
      message: this.message,
    };

    emailjs
      .send('service_s7sjroq', 'template_qhxeavg', templateParams, 'qhPAH8comcyGlcslc')
      .then(() => {
        this.status = 'sent';
        this.submitted = false;
        this.name = '';
        this.email = '';
        this.message = '';
      })
      .catch(() => {
        this.status = 'failed';
      });
  }
}
