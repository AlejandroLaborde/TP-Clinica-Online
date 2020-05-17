import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFirestore  } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  constructor( private httpClient: HttpClient, private angularFirestore:AngularFirestore) {

   }

  altaDatosPersona( usuario ){
    usuario.contraseña="*******";
    this.httpClient.post(`${environment.hostFirebase}usuarios.json`,usuario).subscribe(asd=>{
      console.log(asd);
    })
  }

}
