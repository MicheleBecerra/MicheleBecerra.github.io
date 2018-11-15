import { Component } from '@angular/core';

@Component ({
    selector: 'techskills',
    templateUrl: './skills.component.html',
})

@Component ({
    selector: 'skills',
    templateUrl: './skills.component.html',
})

export class TechKnowsComponent {
    public nombre_conocimientos = 'Conocimientos tecnológicos';
    public listado_conocimientos = '';
}
export class SkillsComponent {
    public nombre_conocimientos = 'Habilidades Tecnológicas';
    public listado_habilidades = '';
}
