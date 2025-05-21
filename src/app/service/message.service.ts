import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() { }
  private _message = new BehaviorSubject<string | null>(null);
  message$ = this._message.asObservable();

  showMessage(message: string) {
    this._message.next(message);
    setTimeout(() => this._message.next(null), 4000); // limpa após 4 segundos
  }
}
