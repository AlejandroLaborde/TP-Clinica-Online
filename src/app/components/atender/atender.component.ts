import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/models/turno';
import { TurnosService } from 'src/app/services/turnos.service';
import { LoginService } from 'src/app/services/login.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-atender',
  templateUrl: './atender.component.html',
  styleUrls: ['./atender.component.css']
})
export class AtenderComponent implements OnInit {

  misReservas:Turno[];
  misReservasPantalla:Turno[];
  constructor( private turnosService:TurnosService,
              private loginService:LoginService,
              private usuarioService:UsuariosService,
              private router:Router) { }

  ngOnInit(): void {
    this.traeTurnos();
    
  }

  traeTurnos(){
    this.loginService.currentUser().then(usuario=>{
      this.usuarioService.getDatosPersona(usuario.email).subscribe(persona=>{
        this.turnosService.getTurnosProfesional(persona.id).then(turnos=>{
          this.misReservas=turnos;
          this.misReservasPantalla=turnos;
        })
      })
    })
  }

  agenda(){
    this.misReservasPantalla=this.misReservas;
  }

  soloHoy(){
    this.misReservasPantalla= this.misReservas.filter((turno)=>{
     
      var parts = turno.dia.split('-');
      var turnoDay = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2])); 
      console.log(turnoDay);
      const hoy = new Date();
     
      if(turnoDay.getDay()==hoy.getDay() && turnoDay.getMonth()==hoy.getMonth() && turnoDay.getFullYear()==hoy.getFullYear()  ){
        return turno;
      }
    })
  }

  cancelar( turno:Turno ){

    Swal.fire({
      title: 'Ingrese Motivo de cancelacion',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      confirmButtonText: 'Enviar',
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.value) {
        this.turnosService.cancelarTurno(turno.id,"CANCELADO",result.value).subscribe(()=>{ 
          Swal.fire({
            title:'Se guardo la reseña',
            icon:'success'
          }).then(()=>{
            this.traeTurnos();
          })
        })
      }
    })
    
    
  }
  aceptar( turno:Turno ){
    this.turnosService.aceptarTurno(turno.id).subscribe(()=>{ 
      this.traeTurnos();
    })
  }
  rechazar( turno:Turno ){
    Swal.fire({
      title: 'Ingrese Motivo de Rechazo',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      confirmButtonText: 'Enviar',
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.value) {
        this.turnosService.cancelarTurno(turno.id,"RECHAZADO",result.value).subscribe(()=>{ 
          Swal.fire({
            title:'Se guardo la reseña',
            icon:'success'
          }).then(()=>{
            this.traeTurnos();
          })
        })
      }
    })
  }

  
  atender(item){
    
    Swal.fire({
      title: 'Ingrese la devolucion de la sesion',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      confirmButtonText: 'Enviar',
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.value) {
        this.turnosService.atender(item.id,result.value).subscribe(()=>{
          Swal.fire({
            title:'Se guardo la reseña',
            icon:'success'
          }).then(()=>{
            this.traeTurnos();
          })
        })  
      }
    })
    
  }

}
