import { Component } from '@angular/core';

@Component({
    selector: 'app-skillstree',
    imports: [],
    templateUrl: './skillstree.component.html'
})
export class SkillstreeComponent {
  readonly proven = [
    { name: 'C# + .NET', where: 'ReportForge, Dynamic Island' },
    { name: 'SQL', where: 'Consultas críticas ~90% mais rápidas na Sisplan; Oracle, PostgreSQL, SQL Server e MySQL' },
    { name: 'Delphi', where: 'Melhorias no sistema da Sisplan' },
    { name: 'Flutter + Dart', where: 'App de eficiência produtiva da Fiobras, com Firebase' },
    { name: 'Angular + TypeScript', where: 'CS2 Map Selector e este portfólio' },
    { name: 'QA', where: 'Planejamento e execução de testes na rotina da Sisplan' },
  ];

  readonly groups = [
    { title: 'Bancos de dados', items: ['SQL Server', 'MySQL', 'PostgreSQL', 'Oracle', 'Firebird', 'Firebase', 'Supabase', 'Modelagem relacional'] },
    { title: 'APIs e integração', items: ['RESTful APIs', 'OpenAPI / Swagger', 'OAuth2', 'EF Core'] },
    { title: 'DevOps e ferramentas', items: ['Azure DevOps', 'Git', 'GitHub', 'GitFlow', 'Docker', 'DBeaver'] },
    { title: 'Front-end', items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Bootstrap'] },
    { title: 'Métodos', items: ['Scrum', 'Kanban', 'SOLID'] },
    { title: 'Idiomas', items: ['Português · nativo', 'Inglês · avançado'] },
  ];
}
