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
  constructor( private turnosService:TurnosService,
              private loginService:LoginService,
              private usuarioService:UsuariosService,
              private router:Router) { }

  ngOnInit(): void {
    this.loginService.currentUser().then(usuario=>{
      this.usuarioService.getDatosPersona(usuario.email).subscribe(persona=>{
        this.turnosService.getTurnosProfesional(persona.id).then(turnos=>{
          console.log(turnos);
          this.misReservas=turnos;
        })
      })
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
        this.turnosService.altaResena(item.id,result.value).subscribe(()=>{
          Swal.fire({
            title:'Se guardo la reseña',
            icon:'success'
          }).then(()=>{

            this.router.navigate(['/MiPerfil']);
          })
        })
      }
    })
    
  }

}
