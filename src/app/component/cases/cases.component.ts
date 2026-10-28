import { Component } from '@angular/core';

@Component({
    selector: 'app-cases',
    imports: [],
    templateUrl: './cases.component.html'
})
export class CasesComponent {
  readonly fiobrasStages = [
    'Análise de requisitos',
    'Arquitetura da solução',
    'Modelagem do banco',
    'Back-end em C#',
    'App em Flutter',
    'Integração',
    'Testes',
    'Deploy e manutenção',
  ];

  readonly noPrumoDeliveries = [
    'Ficha de EPI com assinatura',
    'Baixa de estoque em transação',
    'Bloqueio de EPI com CA vencido',
    'Devolução e perda de EPI',
    'Vencimento de NR no domínio',
    'Alerta de NR na equipe da obra',
    'Agenda de compromissos',
    'Refatoração e code review',
  ];
}
