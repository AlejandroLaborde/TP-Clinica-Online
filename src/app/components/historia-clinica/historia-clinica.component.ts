import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.css']
})
export class HistoriaClinicaComponent implements OnInit {

  @Output() historiaClinica= new EventEmitter<any>();
  @Input() historia=[];
  constructor() { }

  ngOnInit(): void {
  }
  agregaLinea(){
    this.historia.push({caracteristica:'',valor:''});
  }

  guardar(){
    this.historiaClinica.emit(this.historia);
    Swal.fire({
      icon: 'success',
      title: 'Se guardaron las caracteristicas'
    }).then(()=>{
    })
  }
}
