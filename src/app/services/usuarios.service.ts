import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFirestore  } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  constructor( private httpClient: HttpClient, private angularFirestore:AngularFirestore) {

   }

  altaDatosPersona( usuario ){
    usuario.contraseña="*******";
    console.log(usuario);
    this.httpClient.post(`${environment.hostFirebase}usuarios.json`,usuario).subscribe(asd=>{
      console.log(asd);
    })
  }

  getDatosPersona(mail:string){
    return this.httpClient.get(`${environment.hostFirebase}usuarios.json`).pipe(map(resp=>{return this.filtraPersonas(mail,resp)}));
  }

  getTipoPersona(mail:string){
    return this.httpClient.get(`${environment.hostFirebase}usuarios.json`).pipe(map(resp=>{return this.retornaTipo(mail,resp)})).toPromise();
  }

  getDatosPersonas(mail:string){
    return this.httpClient.get(`${environment.hostFirebase}usuarios.json`).pipe(map(resp=>{return this.objecToArray(resp)}));
  }
  
  getProfesionales(){
    return this.httpClient.get(`${environment.hostFirebase}usuarios.json`).pipe(map(resp=>{return this.filtraProfesionales(resp)}));
  }

  private filtraPersonas(mail,lista){
    let usuario;
    this.objecToArray(lista).forEach(element=>{
      if(mail == element.mail){
        usuario=element;
      }
    })
    return usuario;
  }
  
  private filtraProfesionales(lista){
    let usuarios=[];
    this.objecToArray(lista).forEach(element=>{
      if(element.tipo == "PROFESIONAL"){
        usuarios.push(element);
      }
    })
    return usuarios;
  }
  


  private retornaTipo(mail,lista){
    let usuario;
    this.objecToArray(lista).forEach(element=>{
      if(mail == element.mail){
        usuario=element.tipo;
      }
    })
    return usuario;
  }
  private objecToArray( datos: Object ){
    const usuarios = [];
    if(datos == null) return [];

    Object.keys( datos ).forEach( key =>{
          let usuario: any = datos[key];
          usuario.id=key;
          usuarios.push(usuario);
        
    })
    return usuarios;
  }
}
