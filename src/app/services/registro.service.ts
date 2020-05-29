import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../models/usuario';
import { FileService } from './file.service';
import { UsuariosService } from './usuarios.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor( private angularFireAuth:AngularFireAuth, 
                private fileService: FileService,
                private usuarioService : UsuariosService) { }

  public registroCuenta(usuario: Usuario){
    return this.angularFireAuth.createUserWithEmailAndPassword(usuario.mail,usuario.contraseña);
  }

  public altaDatosUsuario( usuario: Usuario , imagen1, imagen2){
    this.fileService.subirArchivo(usuario.mail+"_img1",imagen1,usuario).then((img)=>{
      this.fileService.subirArchivo(usuario.mail+"_img2",imagen2,usuario).then(img2=>{
       img.ref.getDownloadURL().then(data=>{
        usuario.img1=data;
        img2.ref.getDownloadURL().then(data2=>{
          usuario.img2=data2;
          this.usuarioService.altaDatosPersona(usuario);
         });
       });  
      });
    });
    
    this.registroCuenta(usuario);
  }

  public enviarMailRegistro(){
    this.angularFireAuth.currentUser.then( resp => {
      resp.sendEmailVerification({
        handleCodeInApp: true,
        url: environment.urlVerify
      });
    });
  }

}
