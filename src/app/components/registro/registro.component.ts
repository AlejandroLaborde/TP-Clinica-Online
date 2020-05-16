import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/models/usuario';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formInvalido = false;
  imagen1;
  imagen2;

  constructor(private AngularFireAuth:AngularFireAuth, private router:Router, private miConstructor: FormBuilder,  private http: HttpClient) {
    this.AngularFireAuth.createUserWithEmailAndPassword("alee_2695@live.com.ar",'123asd').then(asd=>{
      console.log(asd);
      
    }).catch(err=>{
      console.log(err);
    })
  }

  formRegistro: FormGroup = this.miConstructor.group({
    email: new FormControl('', [ Validators.email]),
    nombre: new FormControl('', [ Validators.minLength(3)]),
    edad: new FormControl(null, [ Validators.min(1)]),
    apellido: new FormControl('', [ Validators.minLength(3)]),
    clave: new FormControl('', [ Validators.required]),
    copyClave: new FormControl('', [Validators.required])
  });

  ngOnInit() {
  
  }

  onSubmit() {
    console.log("asd");
    const form = this.formRegistro.value;
    if ( form.clave === form.copyClave ) {
      this.registro( new Usuario(form.nombre , form.apellido , form.edad,form.mail, form.contraseña, false) );
    }else {
      this.formInvalido = true;
    }
  }

  volverInicio(){
    this.router.navigate(['/Home']);
  }

  registro( jugador: Usuario ){
    // Swal.showLoading();
    // this.jugadoresService.altaJugador(jugador).then(data => {
    //   Swal.fire({
    //     icon: 'success',
    //     title: 'Se registro con Exito',
    //     text: 'Recuerde que su email es su usuario.',
    //     showConfirmButton: true,
    //   })
    // });
    // this.router.navigate(['/Login']);
  }

  obtieneImagen1( imagen ){
    this.imagen1 = imagen;
  }

  obtieneImagen2( imagen2 ){
    this.imagen2 = imagen2;
  }



}
