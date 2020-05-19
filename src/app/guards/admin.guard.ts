import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private loginService:LoginService,private usuarioService:UsuariosService){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      
      return this.loginService.currentUser().then(usuario=>{
        
        return this.usuarioService.getTipoPersona(usuario.email).then(resp=>{
          if(resp=="ADMIN"){
            return true;
          }else{
            return false;
          }
        })
        
      })
  }
  
}
