import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  sent: boolean = false;
  error: boolean = false;

  sendEmail() {
    const templateParams = {
      from_name: this.name,
      reply_to: this.email,
      message: this.message,
    };

    emailjs
      .send('service_s7sjroq', 'template_qhxeavg', templateParams, 'qhPAH8comcyGlcslc')
      .then(
        () => {
          this.sent = true;
          this.error = false;
          this.name = '';
          this.email = '';
          this.message = '';
          // alert("Mensagem enviada com sucesso, Obrigado!");
        },
        () => {
          this.sent = false;
          this.error = true;
          // alert("Ocorreu um erro no processo, tente novamente mais tarde!");
        }
      );
  }
}
