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
         this.router.navigate(['/Principal']);
         
        }else{
         this.logeando=true;
         this.errorLoguin=true;
        }
        Swal.close();
      }).catch(error=>{
        Swal.fire({
          title:'Ops! Algo salio mal, Usuario o contraseña erroneos',
          icon: 'error'
        })
      });
  }

  

}
