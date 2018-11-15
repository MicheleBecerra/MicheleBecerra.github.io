import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectoComponent } from './components/proyectos/proyectos.component';
@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    SkillsComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
