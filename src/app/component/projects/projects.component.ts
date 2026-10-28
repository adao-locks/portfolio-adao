import { Component } from '@angular/core';

interface Project {
  name: string;
  kind: string;
  address: string;
  description: string;
  shows: string;
  tags: string[];
  primary: { label: string; url: string };
  /** Repositório no GitHub. Sem ele, o card mostra só o botão principal. */
  code?: string;
}

@Component({
    selector: 'app-projects',
    imports: [],
    templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      name: 'Dynamic Island',
      kind: 'Desktop · Windows',
      address: 'DynamicIsland-Setup.exe',
      description: 'A Dynamic Island do iPhone no Windows: música, timers e notificações no topo da tela.',
      shows: 'app nativo em C#/WPF integrado às APIs do Windows, com instalador próprio.',
      tags: ['C#', 'WPF', '.NET'],
      // Site do projeto (com o instalador) publicado dentro deste portfólio: src/dynamic-island
      primary: { label: 'Ver o site', url: '/dynamic-island/' },
    },
    {
      name: 'SalesPlus',
      kind: 'Desktop',
      address: 'SalesPlus.exe',
      description: 'Aplicação desktop para gestão de vendas, pedidos e estoque.',
      shows: 'regras de negócio de um sistema de gestão, do pedido ao estoque.',
      tags: ['Delphi', 'Desktop', 'Release beta'],
      primary: { label: 'Baixar instalador', url: 'https://github.com/adao-locks/GestaoDeVendas/releases/tag/Beta' },
      code: 'https://github.com/adao-locks/GestaoDeVendas',
    },
    {
      name: 'CS2 Map Selector',
      kind: 'Web app',
      address: 'cs2-map-selector.vercel.app',
      description: 'Escolha de mapas, times e chaveamento de campeonatos de Counter-Strike 2.',
      shows: 'fluxo com regras (veto, sorteio, chaves) e estado compartilhado entre telas.',
      tags: ['Angular', 'TypeScript', 'Vercel'],
      primary: { label: 'Abrir demo', url: 'https://cs2-map-selector.vercel.app/' },
      code: 'https://github.com/adao-locks/cs2-map-selector',
    },
  ];
}
