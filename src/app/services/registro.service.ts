import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../models/usuario';
import { FileService } from './file.service';
import { UsuariosService } from './usuarios.service';


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
    this.fileService.subirArchivo(usuario.mail+"_img1",imagen1);
    this.fileService.subirArchivo(usuario.mail+"_img2",imagen2);
    this.usuarioService.altaDatosPersona(usuario);
  }
  
  public enviarMailRegistro(){
    
  }

}
