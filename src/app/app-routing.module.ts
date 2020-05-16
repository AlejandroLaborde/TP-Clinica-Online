import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
  
  {path: 'Login' , component: LoginComponent},
  {path: 'Home' , component: HomeComponent},
  {path: 'Registro' , component: RegistroComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'Home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
