import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Subscription} from "rxjs";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  usuario = '';
  clave= '';
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;
  errorLoguin=false;
  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) {
     

  }

  ngOnInit() {
  }

  Entrar() {
  //  this.jugadoresService.logIn(this.usuario,this.clave).then(resp=>{
  //    console.log(resp);
  //    if(resp){
  //     this.router.navigate(['/Principal']);
  //    }else{
  //     this.logeando=true;
  //     this.errorLoguin=true;
  //     this.progreso=0;
  //     this.ProgresoDeAncho="0%";
  //    }
  //  }).catch(error=>{
  //    Swal.fire({
  //      title:'Ops! Algo salio mal, intenta en unos momentos',
  //      icon: 'error'
  //    })
  //  });
   
  }

  

}
