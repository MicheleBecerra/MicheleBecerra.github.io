import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectoComponent } from './components/proyectos/proyectos.component';
import { BarraComponent} from './components/barra/barra.component';
import { ContactoComponent} from './components/contacto/contacto.component'

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    SkillsComponent,
    ProyectoComponent,
    BarraComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
