import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-message',
    imports: [CommonModule],
    template: `
    @if (messageService.message$ | async; as message) {
      <div
        class="message-toast"
        >
        {{ message }}
      </div>
    }
    `,
    styles: [`
    .message-toast {
      position: fixed;
      top: 6.5rem;
      right: 1rem;
      background: rgba(10, 13, 20, 0.92);
      color: var(--tc);
      padding: 1rem 1.5rem;
      border: 1px solid var(--line);
      border-radius: 8px;
      box-shadow: var(--shadow);
      z-index: 9999;
      transition: all 0.3s ease-in-out;
    }
  `]
})
export class MessageComponent {
  constructor(public messageService: MessageService) {}
}
