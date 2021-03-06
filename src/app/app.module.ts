import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { ChartModule , HIGHCHARTS_MODULES } from 'angular-highcharts';
import exporting from 'highcharts/modules/exporting.src.js'
export function highchartModules(){
  return [exporting]
}
import { registerLocaleData } from '@angular/common';


import localeEsAr from '@angular/common/locales/es-AR';
registerLocaleData(localeEsAr, 'es-Ar');

import { AppComponent } from './app.component';
import { SubirImagenComponent } from './components/subir-imagen/subir-imagen.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from 'src/environments/environment';
import { RegistroComponent } from './components/registro/registro.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { TurnosComponent } from './components/turnos/turnos.component';
import { ConfiguracionesComponent } from './components/configuraciones/configuraciones.component';
import { FooterComponent } from './components/footer/footer.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { ProfesionalesComponent } from './components/profesionales/profesionales.component';
import { BuscarTurnoComponent } from './components/buscar-turno/buscar-turno.component';
import { ListaTurnosComponent } from './components/lista-turnos/lista-turnos.component';
import { MisTurnosComponent } from './components/mis-turnos/mis-turnos.component';
import { AtenderComponent } from './components/atender/atender.component';
import { AltaEspecialidadesComponent } from './components/alta-especialidades/alta-especialidades.component';
import { EncuestaProfesionalComponent } from './components/encuesta-profesional/encuesta-profesional.component';
import { EncuestaPacienteComponent } from './components/encuesta-paciente/encuesta-paciente.component';
import { DiasYHorariosComponent } from './components/dias-yhorarios/dias-yhorarios.component';
import { NombrePipe } from './pipes/nombre.pipe';
import { DiasPipe } from './pipes/dias.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoriaClinicaComponent } from './components/historia-clinica/historia-clinica.component';
import { BusquedaInformacionComponent } from './components/busqueda-informacion/busqueda-informacion.component';
import { ListadoTurnosComponent } from './components/listado-turnos/listado-turnos.component';
import { InformesComponent } from './components/informes/informes.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { MiDirectivaDirective } from './directivas/mi-directiva.directive';



@NgModule({
  declarations: [
    AppComponent,
    SubirImagenComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    RegistroComponent,
    MiPerfilComponent,
    TurnosComponent,
    ConfiguracionesComponent,
    FooterComponent,
    EspecialidadesComponent,
    ProfesionalesComponent,
    BuscarTurnoComponent,
    ListaTurnosComponent,
    MisTurnosComponent,
    AtenderComponent,
    AltaEspecialidadesComponent,
    EncuestaProfesionalComponent,
    EncuestaPacienteComponent,
    DiasYHorariosComponent,
    NombrePipe,
    DiasPipe,
    HistoriaClinicaComponent,
    BusquedaInformacionComponent,
    ListadoTurnosComponent,
    InformesComponent,
    GraficoComponent,
    MiDirectivaDirective,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule, 
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ChartModule

  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-Ar' },
              {provide:HIGHCHARTS_MODULES,useFactory:highchartModules} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
