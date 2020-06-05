import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/models/usuario';
import { RegistroService } from 'src/app/services/registro.service';
import { FileService } from 'src/app/services/file.service';
import { LoginService } from 'src/app/services/login.service';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { Profesional } from 'src/app/models/profesional';
import { Especialidad } from 'src/app/models/especialidad';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formInvalido = false;
  nuevaEspe=false;
  profesional=false;
  imagen1;
  imagen2;
  especialidades:Especialidad[] = [];
  constructor( private router:Router, 
              private miConstructor: FormBuilder,  
              private http: HttpClient, 
              private registroService:RegistroService,
              private loguinService:LoginService,
              private especialidadesService: EspecialidadesService) {
    
  }
  //6Lcv5fgUAAAAALZuvhQHpOBljPWXfGeD165TICyR
  //6Lcv5fgUAAAAAFgazDqJT_f6DebhrWLKT4J_NXyj
  formRegistro: FormGroup = this.miConstructor.group({
    email: new FormControl('', [ Validators.email,Validators.required]),
    nombre: new FormControl('', [ Validators.minLength(3),Validators.required]),
    edad: new FormControl(null, [ Validators.min(1),Validators.required]),
    apellido: new FormControl('', [ Validators.minLength(3), Validators.required]),
    clave: new FormControl('', [Validators.minLength(6), Validators.required]),
    copyClave: new FormControl('', [Validators.minLength(6),Validators.required]),
    recaptchaReactive: new FormControl(null,[Validators.required]),
    especialidadesSelected: new FormControl(this.especialidades[0])
  });

  ngOnInit() {
    this.especialidadesService.obtenerEspecialidades().subscribe(resp=>{
      this.especialidades=resp;
    })
  }

  resolved(captchaResponse: string, res) {
    console.log(`Resolved response token: ${captchaResponse}`);
    //res.getResponse(captchaResponse);
  }
  onSubmit() {
    const form = this.formRegistro.value;
    if ( form.clave === form.copyClave ) {
      if(this.profesional){
        
        this.registro(new Profesional(new Usuario(form.nombre , form.apellido , form.edad,form.email,form.clave,'PROFESIONAL'),form.especialidadesSelected,false))
      }else{
        this.registro( new Usuario(form.nombre , form.apellido , form.edad,form.email,form.clave,'USER') );
      }
    }else {
      this.formInvalido = true;
    }
  }



  nuevaEspecialidad(especialidad){
    this.especialidadesService.altaEspecialidad(especialidad).subscribe(resp=>{
      Swal.fire({
        icon:'success',
        title:'Se dio de alta especialidad'
      }).then(()=>{
        this.especialidadesService.obtenerEspecialidades().subscribe(resp=>{
          this.especialidades=resp;
        });
        this.nuevaEspe=false;
      })
    });
  }

  volverInicio(){
    this.router.navigate(['/Home']);
  }

  seleccionoProfesional(){
    this.profesional = !this.profesional;
    
  }

  registro( usuario: Usuario ){
    Swal.showLoading();
    if(this.imagen1 && this.imagen2){
      this.registroService.registroCuenta(usuario).then(data => {
        this.registroService.enviarMailRegistro();
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
