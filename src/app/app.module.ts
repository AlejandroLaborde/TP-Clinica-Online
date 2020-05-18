import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';






import { AppComponent } from './app.component';
import { SubirImagenComponent } from './components/subir-imagen/subir-imagen.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from 'src/environments/environment';
import { RegistroComponent } from './components/registro/registro.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { TurnosComponent } from './components/turnos/turnos.component';

@NgModule({
  declarations: [
    AppComponent,
    SubirImagenComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    RegistroComponent,
    MiPerfilComponent,
    TurnosComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
