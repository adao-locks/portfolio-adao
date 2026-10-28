import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { PROFILE, copyToClipboard } from '../../data/profile';
import { MessageService } from '../../service/message.service';

@Component({
    selector: 'app-profile',
    imports: [],
    templateUrl: './profile.component.html',
    host: { class: 'rail', id: 'perfil', role: 'complementary', 'aria-label': 'Perfil' }
})
export class ProfileComponent {
  readonly profile = PROFILE;
  readonly sections = [
    { id: 'case', label: 'Cases' },
    { id: 'projetos', label: 'Projetos pessoais' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'formacao', label: 'Formação' },
    { id: 'stack', label: 'Stack' },
    { id: 'contato', label: 'Contato' },
  ];
  readonly active = signal('');

  private messageService = inject(MessageService);

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Marca no menu lateral a seção visível (só no navegador).
    afterNextRender(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.active.set(entry.target.id);
          }
        },
        { rootMargin: '-30% 0px -60% 0px' }
      );
      for (const { id } of this.sections) {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  async copyEmail() {
    const ok = await copyToClipboard(this.profile.email);
    this.messageService.showMessage(ok ? `E-mail copiado: ${this.profile.email}` : `Copie o e-mail: ${this.profile.email}`);
  }
}
