import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Subscription} from "rxjs";
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  usuario = '';
  clave= '';
  logeando=true;
  errorLoguin=false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private logInService: LoginService
    ) {
     

  }

  ngOnInit() {
  }

  Entrar() {
    Swal.showLoading();
    this.logInService.logIn( this.usuario,this.clave ).then( resp=>{

        console.log(resp);
        if(resp){
          if(resp.user.emailVerified){
            this.router.navigate(['/Principal']);
            Swal.close();
          }else{
            Swal.fire({
              title:"Debe verificar su cuenta de mail para poder continuar",
              icon:'warning',
              showConfirmButton:true
            }).then(()=>{this.logInService.logOut()})
          }
        }else{
         this.logeando=true;
         this.errorLoguin=true;
        }
        
      }).catch(error=>{
        Swal.fire({
          title:'Ops! Algo salio mal, Usuario o contraseña erroneos',
          icon: 'error'
        })
      });
  }

  

}
