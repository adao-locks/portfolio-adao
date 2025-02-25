import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ IMPORTADO

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContatoComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  enviarFormulario() {
    if (this.name && this.email && this.message) {
      console.log('Formulário enviado com sucesso!', {
        nome: this.name,
        email: this.email,
        mensagem: this.message
      });

      alert('Mensagem enviada com sucesso!');
      this.name = '';
      this.email = '';
      this.message = '';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}
