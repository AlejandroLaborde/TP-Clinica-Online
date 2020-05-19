import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuario:Observable<firebase.User>;
  constructor( public angularFireAuth:AngularFireAuth ) { 
    this.usuario = this.angularFireAuth.authState;
  }

  public logIn( mail:string, contraseña:string ){
    return this.angularFireAuth.signInWithEmailAndPassword(mail,contraseña);
  }

  public currentUser(){
    return this.angularFireAuth.currentUser;
  }

  public logueado(){
    return this.angularFireAuth.currentUser.then(resp=>{
      if(resp){
        return true;
      }else{
        return false;
      }
    })
  }

  public logOut(){
    return this.angularFireAuth.signOut();
  }
  




}
