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
  especialidadSelected: Especialidad;
  profesionalesDisponibles:Profesional[]=[];
  profesionalSeleccionado:Profesional=null;
  listaHorarios:any[];
  dia;
  hora='8:00';
  busqueda:string=null;
 
  opcion="1";
  constructor(private formControl:FormBuilder,private turnosService:TurnosService) { }

  ngOnInit(): void {
    this.formBuscar = this.formControl.group({
      especialidad: new FormControl(null,[Validators.required]),

    })

  }

  Solicitar( prodesional: Profesional){
   this.profesionalSeleccionado=prodesional;
   this.especialidadSelected = prodesional.especialidades[0];
   
  }

  reservar(){
    let turnoNuevo = new Turno(this.hora,this.dia,this.especialidadSelected,this.profesionalSeleccionado,'ESPERA');
    this.nuevoTurno.emit(turnoNuevo);
  }

  seleccionaEspe(e){
    this.listaHorarios=null;
    let indice = e.target.selectedIndex;
    this.especialidadSelected = this.profesionalSeleccionado.especialidades[indice];
    this.buscar(false);
  }




  buscar(sabado){
     this.preparaListaHorarios(this.profesionalSeleccionado,this.especialidadSelected,sabado);
  }


  cambioEspecialidad(item){
    console.log(item);
  }


  cambioDia(event){
    console.log("asd");
    var myDate = new Date(this.dia);
    let hoy = new Date();
    let diff = (myDate.getTime()-hoy.getTime())/(1000*60*60*24);
    if(hoy>myDate){
      Swal.fire({
        title: 'Debe seleccionar un día superior a la fecha de hoy'
      })
      this.dia= null;
    }else{

      if(diff < 0 || diff > 15){
        Swal.fire({
          title: 'Solo se pueden seleccionar turnos dentro de los proximos 15 dias'
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


  buscar2(){
    //nombre, apellido, dia , especialidades
    this.profesionalesDisponibles=[];
    let palabraClave = this.busqueda.toLocaleLowerCase();
    if(palabraClave.length!=0){
      this.profesionales.forEach(profesional=>{
        if(profesional.nombre.toLocaleLowerCase().includes(palabraClave)){
          this.agrega(this.profesionalesDisponibles,profesional);
        }
        if(profesional.apellido.toLocaleLowerCase().includes(palabraClave)){
          this.agrega(this.profesionalesDisponibles,profesional);
        }
        profesional.especialidades.forEach(especialidad=>{
          if(especialidad.descripcion.toLocaleLowerCase().includes(palabraClave)){
            this.agrega(this.profesionalesDisponibles,profesional);
          }
        })
        console.log(profesional.dias);
        profesional.dias.forEach(dia=>{
          if(dia.trabaja && dia.dia.toLocaleLowerCase().includes(palabraClave)){
            this.agrega(this.profesionalesDisponibles,profesional);
          }
        })
      })
    }else{
      this.profesionalesDisponibles=[];
    }

  }

  agrega(lista, profesional){
    if(!this.contains(lista, profesional)){
      lista.push(profesional);
    }

  }

  contains(lista:Profesional[], profesional:Profesional){
    let contains = false;
    lista.forEach(prof=>{
      if(prof.id==profesional.id){
        contains=true;
      }
    })
    return contains;
  }


}
