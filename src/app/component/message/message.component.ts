import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-message',
    imports: [CommonModule],
    template: `
    @if (messageService.message$ | async; as message) {
      <div class="message-toast" role="status">
        {{ message }}
      </div>
    }
    `,
    styles: [`
    .message-toast {
      position: fixed;
      left: 50%;
      bottom: calc(24px + env(safe-area-inset-bottom, 0px));
      transform: translateX(-50%);
      z-index: 9999;
      max-width: min(92vw, 460px);
      padding: 12px 16px;
      border-radius: 8px;
      background: var(--ink);
      color: var(--bg);
      font-size: 0.88rem;
      box-shadow: 0 8px 24px rgb(0 0 0 / 0.2);
    }

    @media (max-width: 980px) {
      .message-toast {
        bottom: calc(84px + env(safe-area-inset-bottom, 0px));
      }
    }
  `]
})
export class MessageComponent {
  constructor(public messageService: MessageService) {}
}
