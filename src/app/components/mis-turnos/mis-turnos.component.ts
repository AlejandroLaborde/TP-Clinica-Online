import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/models/turno';
import { TurnosService } from 'src/app/services/turnos.service';
import { LoginService } from 'src/app/services/login.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-turnos',
  templateUrl: './mis-turnos.component.html',
  styleUrls: ['./mis-turnos.component.css']
})
export class MisTurnosComponent implements OnInit {

  misTurnos:Turno[];
  constructor( private turnosService:TurnosService,
                private loginService:LoginService,
                private usuarioService:UsuariosService ) { }

  ngOnInit(): void {
    this.loginService.currentUser().then(  usuario=>{
      this.usuarioService.getDatosPersona(usuario.email).subscribe( datos => {
          this.turnosService.getTurnosPaciente(datos.id).subscribe( turnos => {
            this.misTurnos = turnos.sort((a,b)=>{
              if(a.dia > b.dia){
                return 1;
              }else{
                return -1;
              }
            });
          });
      });
    });
  }

  eliminaTurno(turnoAEliminar:Turno){
    console.log(turnoAEliminar);
    Swal.fire({
      icon:'warning',
      title:'¿Seguro que deseas eliminar turno?',
      showCancelButton:true,
      showConfirmButton:true,
      cancelButtonText:'Cancelar',
      confirmButtonText:'Eliminar',
      confirmButtonColor:'red',
    }).then( resp=>{
      if(resp.value){
        this.turnosService.eliminarTurno(turnoAEliminar.id).subscribe( eliminado=>{
          console.log(eliminado);
          Swal.fire({
            icon:'success'
          }).then(()=>{
            this.loginService.currentUser().then(  usuario=>{
              this.usuarioService.getDatosPersona(usuario.email).subscribe( datos => {
                  this.turnosService.getTurnosPaciente(datos.id).subscribe( turnos => {
                    this.misTurnos = turnos.sort((a,b)=>{
                      if(a.dia > b.dia){
                        return 1;
                      }else{
                        return -1;
                      }
                    });
                  });
              });
            });




          })
        })
      }
    })
  }
}
