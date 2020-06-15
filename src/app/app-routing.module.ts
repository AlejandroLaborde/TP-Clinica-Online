import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { AuthGuard } from './guards/auth.guard';
import { TurnosComponent } from './components/turnos/turnos.component';
import { AdminGuard } from './guards/admin.guard';
import { ConfiguracionesComponent } from './components/configuraciones/configuraciones.component';
import { MisTurnosComponent } from './components/mis-turnos/mis-turnos.component';
import { AtenderComponent } from './components/atender/atender.component';
import { BuscarTurnoComponent } from './components/buscar-turno/buscar-turno.component';
import { BusquedaInformacionComponent } from './components/busqueda-informacion/busqueda-informacion.component';
import { InformesComponent } from './components/informes/informes.component';


const routes: Routes = [
  
  {path: 'Login' , component: LoginComponent , data: {animation: 'Loguin'}},
  {path: 'Home' , component: HomeComponent, data: {animation: 'Home'}},
  {path: 'Registro' , component: RegistroComponent,data: {animation: 'Registro'}},
  {path: 'MiPerfil' ,canActivate:[AuthGuard], component: MiPerfilComponent},
  {path: 'Atender' ,canActivate:[AuthGuard], component: AtenderComponent},
  {path: 'MisTurnos' ,canActivate:[AuthGuard], component: MisTurnosComponent},
  {path: 'Turnos' , canActivate:[AuthGuard], component: TurnosComponent},
  {path: 'BuscadorTurnos' , canActivate:[AuthGuard,AdminGuard], component: BusquedaInformacionComponent},
  {path: 'Configuraciones' , canActivate:[AuthGuard,AdminGuard], component: ConfiguracionesComponent},
  {path: 'Informes' , canActivate:[AuthGuard,AdminGuard], component: InformesComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'Home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
