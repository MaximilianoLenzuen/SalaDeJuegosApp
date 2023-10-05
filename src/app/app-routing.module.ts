import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ChatComponent } from './componentes/chat/chat.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'quiensoy',
    loadChildren: () => import('./componentes/quien-soy/quien-soy.module')
    .then(mod => mod.QuienSoyModule) },
  { path: 'home',
    loadChildren: () => import('./componentes/home/home.module')
    .then(mod => mod.HomeModule) },
  { path: 'registro',
    loadChildren: () => import('./componentes/registro/registro.module')
    .then(mod => mod.RegistroModule)},
  { path: '', redirectTo: 'login',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
