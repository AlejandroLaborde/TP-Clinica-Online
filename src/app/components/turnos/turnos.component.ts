import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { Especialidad } from 'src/app/models/especialidad';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { empty } from 'rxjs';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { TurnosService } from 'src/app/services/turnos.service';
import { LoginService } from 'src/app/services/login.service';
import { Turno } from 'src/app/models/turno';
import { Profesional } from 'src/app/models/profesional';
import { Usuario } from 'src/app/models/usuario';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {

  especialidadesList:Especialidad[];
  profesionales: Profesional[];
  turnos: Turno[];
  
  constructor( private especialidadesService:EspecialidadesService,
                private turnoService: TurnosService,
                private loginService: LoginService,
                private usuarioService:UsuariosService,
                private router:Router
                ) { 
    this.especialidadesService.obtenerEspecialidades().subscribe(resp=>{
      this.especialidadesList = resp;
    });
    this.usuarioService.getProfesionalesAprobado().subscribe(profesionales=>{
      this.profesionales=profesionales;
    })
  }

  ngOnInit(): void {
   
  }

  verDisponibilidad(turno:Turno){

    this.turnoService.verDisponibilidad(turno.profesional.id,turno.hora, turno.dia).then(disponible=>{
      if(disponible){
        Swal.fire({
          icon:'info',
          html: '<div class="card mb-3" style="max-width: 540px;">'+
          '<div class="row no-gutters">'+
            '<div class="col-md-4" style="display: flex;">'+
              '<img src="'+turno.profesional.img1+'" class="card-img" alt="...">'+
            '</div>'+
            '<div class="col-md-8">'+
              '<div class="card-body">'+
                '<h5 class="card-title">'+ turno.especialidad.descripcion +'</h5>'+
                '<h6 class="card-text">Profesional: '+ turno.profesional.nombre + ' '+ turno.profesional.apellido +'</h6>'+
                '<h6 class="card-text">Dia y horario: '+ turno.dia +' - '+ turno.hora+'</h6>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>',
          titleText:"Confirmacion de Turno",
          showCancelButton: true,
          confirmButtonText: 'Confirmar',
          cancelButtonText: 'Cancelar',
        }).then(respuesta=>{
          if(respuesta.value){
            this.loginService.angularFireAuth.user.subscribe(datos=>{
              this.usuarioService.getDatosPersona(datos.email).subscribe( (persona:Usuario) => {
                turno.paciente=persona;
                this.turnoService.altaTurno(turno).subscribe(asd=>{
                  Swal.fire({
                    icon:'success',
                    titleText:'Reservado'
                  }).then(()=>{
                    this.router.navigate(['Home']);
                  }); 
                });
              });
            });
          }else{
            Swal.fire({
              icon:'error',
              titleText:'Cancelado'
            }); 
          }});


      }else{
        Swal.fire({
          title:"Oopss!!",
          icon:'error',
          titleText:"El turno en ese horario ya fue reservado. PorFavor seleccione otro"
        })
      }
    });

    

  }
}
