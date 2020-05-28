import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Especialidad } from 'src/app/models/especialidad';
import { Profesional } from 'src/app/models/profesional';
import { TurnosService } from 'src/app/services/turnos.service';
import Swal from 'sweetalert2';
import { Turno } from 'src/app/models/turno';

@Component({
  selector: 'app-buscar-turno',
  templateUrl: './buscar-turno.component.html',
  styleUrls: ['./buscar-turno.component.css']
})
export class BuscarTurnoComponent implements OnInit {

  formBuscar:FormGroup;

  @Input() especialidades:Especialidad[];
  @Input() profesionales:Profesional[];
  @Output() nuevoTurno = new EventEmitter<Turno>();
  selectedEspecialidad: Especialidad;
  profesionalesDisponibles:Profesional[]=[];
  profesionalSeleccionado:Profesional=null;
  listaHorarios:any[];
  dia;
  hora='8:00';
  constructor(private formControl:FormBuilder,private turnosService:TurnosService) { }

  ngOnInit(): void {
    this.formBuscar = this.formControl.group({
      especialidad: new FormControl(null,[Validators.required]),

    })

  }

  reservar(){
    let turnoNuevo = new Turno(this.hora,this.dia,this.selectedEspecialidad,this.profesionalSeleccionado);
    this.nuevoTurno.emit(turnoNuevo);
  }

  buscar(sabado){

    if(this.formBuscar.valid){
      this.especialidades.forEach(element => {
        if(element.codigo == this.formBuscar.value.especialidad ){
          this.preparaListaHorarios(this.profesionalSeleccionado,element,sabado);
        }
      });
    }
  }

  cambioProfesional(e){
    console.log(e.srcElement.value);
   
    if(e.srcElement.value != "-1"){

      this.profesionales.forEach(profesional=>{
        if(profesional.id == e.srcElement.value){
          this.profesionalSeleccionado = profesional;
        }
      })
    }
  }

  cambioSeleccion(e){
    //this.profesionalSeleccionado=null;
    this.listaHorarios=null;
    let indice = e.target.selectedIndex;
    this.profesionalesDisponibles=[];
    this.profesionales.forEach(element => {
      element.especialidades.forEach(especialidad => {
        console.log(this.especialidades[indice].codigo);
        if(especialidad.codigo == this.especialidades[indice].codigo){
          this.selectedEspecialidad = especialidad;
          this.profesionalesDisponibles.push(element);
        }
      });
    });
  }

  cambioDia(event){
    var myDate = new Date(this.dia);
    let hoy = new Date();
    if(hoy>myDate){
      Swal.fire({
        title: 'Debe seleccionar un día superior a la fecha de hoy'
      })
      this.dia= null;
    }else{
      if (myDate.getDay() == 5){
        this.buscar(true);
      }else{
        this.buscar(false);
      }
      if (myDate.getDay() == 6){
        Swal.fire({
          title: 'No se atienden los dias Domingo, por favor elija otro día'
        });
        this.dia = null;
      }
    }

  }

  preparaListaHorarios( profesional: Profesional, especialidad:Especialidad , sabado:boolean ){

    if(profesional == null){
      console.error("error?");
    }else{
      profesional.especialidades.forEach(resp=>{
        if(resp.codigo==especialidad.codigo){
          switch(resp.duracion){          
            case 30:
              if(sabado){
                this.listaHorarios = this.turnosService.listaTurnosDuracion30Sabado();
              }else{
                this.listaHorarios=this.turnosService.listaTurnosDuracion30();
              }
            break;
            case 20:
              if(sabado){
                this.listaHorarios = this.turnosService.listaTurnosDuracion20Sabado();
              }else{
                this.listaHorarios=this.turnosService.listaTurnosDuracion20();
              }
            break;
            case 40:
              if(sabado){
                this.listaHorarios = this.turnosService.listaTurnosDuracion40Sabado();
              }else{
                this.listaHorarios=this.turnosService.listaTurnosDuracion40();
              }
            break;
          }
        }
      })
    }

  }


}
