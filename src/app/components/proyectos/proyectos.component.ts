import { Component } from '@angular/core';

@Component({
    selector: 'proyecto',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.css']
})
export class ProyectoComponent {
    public nombre_proyecto = 'Mis proyectos' ;
    public lista_proyectos = '' ;
}
