import { Component, OnInit, Input } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { Chart } from 'angular-highcharts';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { TurnosService } from 'src/app/services/turnos.service';
import { Especialidad } from 'src/app/models/especialidad';
import { Turno } from 'src/app/models/turno';
import { NgIf } from '@angular/common';
import { Key } from 'protractor';
import { DatoGrafico } from 'src/app/models/datoGrafico';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  uno:boolean=false;
  dos:boolean=false;  
  tres:boolean=false;
  cuatro:boolean=false;
  cinco:boolean=false;
  chart2: Chart;
  chart3: Chart;
  chart4: Chart;
  chart5: Chart;
  especialidades:Especialidad[];
  especualidadesFilter:string[]=[];
  turnos:Turno[];
  datachart2=[];
  constructor( private fileService:FileService,
                private turnosService:TurnosService,
                private especialidadesService: EspecialidadesService ) { 

      this.turnosService.getTodosTurnos().subscribe(resp=>{

        this.agregaDato(resp);
        
      });
   }

  
  ngOnInit(): void {

   }

  agregaDato(resp){
    resp.forEach( dato=>{
      if(this.contains(this.datachart2,dato.especialidad.descripcion)==-1){
        this.datachart2.push(new DatoGrafico(dato.especialidad.descripcion,[1]));
      }else{
        this.datachart2[this.contains(this.datachart2,dato.especialidad.descripcion)].data[0]++;
      }
    })

  }

  contains(lista,dato){
    let indice=-1;
    for (let index = 0; index < lista.length; index++) {
      if(lista[index].name == dato)
      {
        indice=index;
      }
    }
    return indice;
  }

  descargar(numero){
    switch(numero){
      case 1:
        this.fileService.exportAsExcelFile([JSON.stringify({dato:'dd'})],'fichero');
        break;
      case 2:
        this.fileService.exportAsExcelFile(this.preparaParaDescargar(this.datachart2),'cantOperaciones');
        break;
      case 3:
        this.fileService.exportAsExcelFile([JSON.stringify({dato:'dd'})],'turnosXDia');
        break;
      case 4:
        this.fileService.exportAsExcelFile([JSON.stringify({dato:'dd'})],'medicosxTurno');
        break;
      case 5:
        this.fileService.exportAsExcelFile([JSON.stringify({dato:'dd'})],'medicosXDia');
        break;
    }
  }

  preparaParaDescargar(lista){
   return lista.map(dato=>{
      return {name:dato.name,data:dato.data[0]}
      
    })
  }

  ver(numero){
    switch(numero){
      case 2:
        this.armarchart2();
        this.dos=!this.dos;
        this.tres=false;
        this.cuatro=false;
        this.cinco=false;
        break;
      case 3:
        this.armarchart3();
        this.dos=false;
        this.tres=!this.tres;
        this.cuatro=false;
        this.cinco=false;
        break;
      case 4:
        this.dos=false;
        this.tres=false;
        this.cuatro=!this.cuatro;
        this.cinco=false;
        break;
      case 5:
        this.dos=false;
        this.tres=false;
        this.cuatro=false;
        this.cinco=!this.cinco;
        break;
    }
  }

  armarchart2(){
    this.chart2 = new Chart({
      chart: {
        renderTo: 'container',
        type: 'column'
      },
      title: {
          text: 'Cantidad Operaciones'
      },
      xAxis: {  
          categories:['Especialidades']

      },
      yAxis: {
          title: {
              text: 'Cantidad Operaciones'
          },
          tickInterval: 1
      },
      series: this.datachart2
    });
  }

  armarchart3(){
    this.chart3 = new Chart({
      chart: {
        renderTo: 'container',
        type: 'line'
      },
      title: {
          text: 'Cantidad Operaciones'
      },
      xAxis: {  
          categories:['Especialidades']

      },
      yAxis: {
          title: {
              text: 'Cantidad Operaciones'
          },
          tickInterval: 1
      },
      series: this.datachart2
    });
  }
}
