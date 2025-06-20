import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { MessageService } from '../../service/message.service';

@Component({
    selector: 'app-contact',
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  constructor(private messageService: MessageService) {}

  sendEmail() {
    const templateParams = {
      name: this.name,
      email: this.email,
      message: this.message,
    };

    emailjs
      .send('service_s7sjroq', 'template_qhxeavg', templateParams, 'qhPAH8comcyGlcslc')
      .then(() => {
        this.messageService.showMessage('Mensagem enviada com sucesso!');
        this.name = '';
        this.email = '';
        this.message = '';
      })
      .catch(() => {
        this.messageService.showMessage('Erro ao enviar mensagem.');
      });
  }
}
