import { Component } from '@angular/core';

@Component({
    selector: 'proyecto',
    templateUrl: './proyectos.component.html',
    styleUrls: ['./proyectos.component.css']
})
export class ProyectoComponent {
    public nombre_proyecto = 'Mis proyectos' ;
    public lista_proyectos = '' ;
}
