import { Component, OnInit, Input } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { TurnosService } from 'src/app/services/turnos.service';
import { Especialidad } from 'src/app/models/especialidad';
import { Turno } from 'src/app/models/turno';
import { NgIf } from '@angular/common';
import { Key } from 'protractor';
import { DatoGrafico, DatoGraficoPie } from 'src/app/models/datoGrafico';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Chart } from 'angular-highcharts';
import { Profesional } from 'src/app/models/profesional';

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
  datachart3=[];
  datachart4=[];
  datachart5=[];
  profesionales;

  
  constructor( private fileService:FileService,
                private turnosService:TurnosService,
                private especialidadesService: EspecialidadesService,
                private usuariosService:UsuariosService ) { 

      this.turnosService.getTodosTurnos().subscribe(resp=>{
        this.agregaDato(resp);
        this.preparachart3(resp);
        this.preparachart4(resp);
      });
      this.usuariosService.getProfesionalesAprobado().subscribe( resp=>{
        this.profesionales = resp;
        this.preparachart5(resp);
      })

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

  preparachart3(resp){
    resp.forEach( dato=>{
      if(this.contains(this.datachart3,dato.dia)==-1){
        this.datachart3.push(new DatoGrafico(dato.dia,[1]));
      }else{
        this.datachart3[this.contains3(this.datachart3,dato.dia)].data[0]++;
      }
    })
  }

  preparachart4(resp){
    resp.forEach( dato=>{
     
      if(this.contains(this.datachart4,dato.profesional.nombre +" "+ dato.profesional.apellido)==-1){
        this.datachart4.push(new DatoGrafico(dato.profesional.nombre +" "+ dato.profesional.apellido,[1]));
      }else{
        this.datachart4[this.contains(this.datachart4,dato.profesional.nombre +" "+ dato.profesional.apellido)].data[0]++;
      }
    })
  }

  preparachart5(resp){
    const diasSemana=['LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO'];

    diasSemana.forEach( dia=>{
      this.datachart5.push(new DatoGrafico(dia,[0]));
    })
    resp.forEach( (dato:Profesional)=>{
      dato.dias.forEach( diaProf=>{
        if(diaProf.trabaja){
          this.datachart5[this.contains(this.datachart5,diaProf.dia)].data[0]++;
        }
      })
    })

    
  }

  contains3(lista,dato){
    let indice=-1;
    for (let index = 0; index < lista.length; index++) {
      if(lista[index].name == dato)
      {
        indice=index;
      }
    }
    return indice;
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
        this.fileService.exportAsExcelFile(this.armarChart1(),'fichero');
        break;
      case 2:
        this.fileService.exportAsExcelFile(this.preparaParaDescargar(this.datachart2),'cantOperaciones');
        break;
      case 3:
        this.fileService.exportAsExcelFile(this.preparaParaDescargar(this.datachart3),'turnosXDia');
        break;
      case 4:
        this.fileService.exportAsExcelFile(this.preparaParaDescargar(this.datachart4),'medicosxTurno');
        break;
      case 5:
        this.fileService.exportAsExcelFile(this.preparaParaDescargar(this.datachart5),'medicosXDia');
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
        this.armarchart4();
        this.dos=false;
        this.tres=false;
        this.cuatro=!this.cuatro;
        this.cinco=false;
        break;
      case 5:
        this.armarchart5();
        this.dos=false;
        this.tres=false;
        this.cuatro=false;
        this.cinco=!this.cinco;
        break;
    }
  }

  armarChart1(){
    let historial=[]
    this.profesionales.forEach(element => {
      const ingresos = this.usuariosService.objecToArray(element.ingresos)
      if(ingresos){
        ingresos.forEach(ficha => {
          const dia=new Date(ficha.dia);
          historial.push({Profesional:element.nombre + element.apellido, dia: dia.getDay()+'/'+ dia.getMonth()+'/'+dia.getFullYear(), hora:dia.getHours()+':'+dia.getMinutes()});
        });
      }
    });
    return historial;
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
        type: 'column'
      },
      title: {
          text: 'Turnos por dia'
      },
      xAxis: {  
          categories:['Dias']

      },
      yAxis: {
          title: {
              text: 'Cantidad Turnos'
          },
          tickInterval: 1
      },
      series: this.datachart3.sort((a,b)=>{
        const dateA=new Date(a.name);
        const dateB=new Date(b.name);
        if(dateA < dateB){
          return -1
        }else
        {
          return 0
        }
      })
    });
  }

  armarchart4(){
    this.chart4 = new Chart({
      chart: {
        renderTo: 'container',
        type: 'column'
      },
      title: {
          text: 'Cantidad de Turnos por medico'
      },
      xAxis: {  
          categories:['Profesionales']

      },
      yAxis: {
          title: {
              text: 'Cantidad Turnos'
          },
          tickInterval: 1
      },
      series: this.datachart4
       });
  }

  armarchart5(){
    this.chart5 = new Chart({
      chart: {
        renderTo: 'container',
        type: 'column'
      },
      title: {
          text: 'Cantidad de Profesionales por dia'
      },
      xAxis: {  
          categories:['Profesionales']

      },
      yAxis: {
          title: {
              text: 'Dias Semana'
          },
          tickInterval: 1
      },
      series: this.datachart5
     
    });
  }
}
