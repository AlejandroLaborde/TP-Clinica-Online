import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/models/usuario';
import { RegistroService } from 'src/app/services/registro.service';
import { FileService } from 'src/app/services/file.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formInvalido = false;
  imagen1;
  imagen2;

  constructor( private router:Router, 
              private miConstructor: FormBuilder,  
              private http: HttpClient, 
              private registroService:RegistroService,
              private loguinService:LoginService) {
    
  }

  formRegistro: FormGroup = this.miConstructor.group({
    email: new FormControl('', [ Validators.email,Validators.required]),
    nombre: new FormControl('', [ Validators.minLength(3),Validators.required]),
    edad: new FormControl(null, [ Validators.min(1),Validators.required]),
    apellido: new FormControl('', [ Validators.minLength(3), Validators.required]),
    clave: new FormControl('', [Validators.minLength(6), Validators.required]),
    copyClave: new FormControl('', [Validators.minLength(6),Validators.required])
  });

  ngOnInit() {
  
  }


  onSubmit() {
    const form = this.formRegistro.value;
    if ( form.clave === form.copyClave ) {
      this.registro( new Usuario(form.nombre , form.apellido , form.edad,form.email,form.clave, false) );
    }else {
      this.formInvalido = true;
    }
  }

  volverInicio(){
    this.router.navigate(['/Home']);
  }

  registro( usuario: Usuario ){
    Swal.showLoading();
    if(this.imagen1 && this.imagen2){
      this.registroService.registroCuenta(usuario).then(data => {
        this.registroService.altaDatosUsuario(usuario,this.imagen1,this.imagen2);
        Swal.fire({
          icon: 'success',
          title: 'Se registro con Exito, deve verificar su cuenta, se envio un mail para ello',
          showConfirmButton: true,
        }).then(()=>{
          
          this.loguinService.logOut();
          this.router.navigate(['/Login']);
        })
      }).catch(err=>{
        Swal.fire({
          icon: 'error',
          title: 'Por favor verifique la informacion ingresada  '+ err,
          showConfirmButton: true,
        }).then(()=>{
  
        })
      });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Debe ingresar 2 imagenes',
        showConfirmButton: true,
      }).then(()=>{

      })
    }
  }

  obtieneImagen1( imagen ){
    this.imagen1 = imagen;
  }

  obtieneImagen2( imagen2 ){
    this.imagen2 = imagen2;
  }



}
