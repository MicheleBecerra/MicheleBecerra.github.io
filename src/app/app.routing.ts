// Fichero de configuración de rutas.

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importamos los componentes


import { AppComponent } from './app.component';
import { HomeComponent} from './components/home/home.component';
import { PerfilComponent  } from './components/perfil/perfil.component';
import { SkillsComponent  } from './components/skills/skills.component';
import { ProyectoComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent} from './components/contacto/contacto.component';

// Array de objetos json que definen las rutas.

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'home', component: HomeComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'proyecto', component: ProyectoComponent},
  {path: 'contacto', component: ContactoComponent},

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
