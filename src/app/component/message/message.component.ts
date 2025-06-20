import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-message',
    imports: [CommonModule],
    template: `
    <div
      *ngIf="messageService.message$ | async as message"
      class="message-toast"
    >
      {{ message }}
    </div>
  `,
    styles: [`
    .message-toast {
      position: fixed;
      top: 1rem;
      right: 1rem;
      background: #0f172a;
      color: #f8fafc;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      z-index: 9999;
      transition: all 0.3s ease-in-out;
    }
  `]
})
export class MessageComponent {
  constructor(public messageService: MessageService) {}
}
