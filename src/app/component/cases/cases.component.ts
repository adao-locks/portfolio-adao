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
}
