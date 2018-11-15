import { Component } from '@angular/core';

@Component({
    selector: 'perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.css']
})

export class PerfilComponent {
    public nombre_componente = 'Sobre mí';
    // tslint:disable-next-line:max-line-length
    public texto_perfil = 'Soy una fiel creyente de que el conocimiento es él tranformador de realidades. Me encanta aprender cosas nuevas. Debido a mi pasión por el aprendizaje termine en el mundo de la programación. Creo que todos los días se aprende algo nuevo y la programación tiene como parte de su ADN la actualización constante para no rezagarse. Soy una autodidacta de nacimiento, el aprender cosas nuevas y emprender nuevos proyectos es mi pasión. En mi tiempo libre me gusta leer, me gusta la lectura tipo thriller. Para distraerme hago manualidades para mis gatos y veo casi todo tipo de series.';
}
