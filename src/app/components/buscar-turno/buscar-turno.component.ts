import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Especialidad } from 'src/app/models/especialidad';
import { Profesional } from 'src/app/models/profesional';
import { TurnosService } from 'src/app/services/turnos.service';

@Component({
  selector: 'app-buscar-turno',
  templateUrl: './buscar-turno.component.html',
  styleUrls: ['./buscar-turno.component.css']
})
export class BuscarTurnoComponent implements OnInit {

  formBuscar:FormGroup;

  @Input() especialidades:Especialidad[];
  @Input() profesionales:Profesional[];
   seleccionaEspecialidad: Especialidad;
  profesionalesDisponibles:Profesional[]=[];
  profesionalSeleccionado:Profesional=null;
  listaHorarios:any[];
  constructor(private formControl:FormBuilder,private turnosService:TurnosService) { }

  ngOnInit(): void {
    this.formBuscar = this.formControl.group({
      especialidad: new FormControl(null,[Validators.required]),
      
    })
   
  }

  buscar(){
    console.log(this.profesionalSeleccionado);
    if(this.formBuscar.valid){
      this.especialidades.forEach(element => {
        if(element.codigo == this.formBuscar.value.especialidad ){
          this.preparaListaHorarios(this.profesionalSeleccionado,element);
          //this.seleccionaEspecialidad.emit([element,this.profesionalSeleccionado]);
        }
      });
    }
  }

  cambioProfesional(e){
    this.profesionalSeleccionado=null;
    let indice = e.target.selectedIndex;
    console.log(e.target.selectedIndex);
    this.profesionalSeleccionado = this.profesionales[indice-1];
  }

  cambioSeleccion(e){
    this.profesionalSeleccionado=null;
    this.listaHorarios=null;
    let indice = e.target.selectedIndex;
    this.profesionalesDisponibles=[];
    this.profesionales.forEach(element => {
      element.especialidades.forEach(especialidad => {
        if(especialidad.codigo == this.especialidades[indice].codigo){
          this.profesionalesDisponibles.push(element);
        }
      });
    });
  }

  cambioDia(event){
    console.log(event);
  }

  preparaListaHorarios( profesional: Profesional, especialidad:Especialidad ){

    if(profesional == null){

    }else{
      profesional.especialidades.forEach(resp=>{
        if(resp.codigo==especialidad.codigo){
          switch(resp.duracion){
            case 30:
              this.listaHorarios=this.turnosService.listaTurnosDuracion30();
            break;
          }
        }
      })
    }

  }


}
