import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectoComponent } from './components/proyectos/proyectos.component';
import { BarraComponent} from './components/barra/barra.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    SkillsComponent,
    ProyectoComponent,
    BarraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
