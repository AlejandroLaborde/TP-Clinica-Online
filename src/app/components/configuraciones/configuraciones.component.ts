import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Profesional } from 'src/app/models/profesional';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.css']
})
export class ConfiguracionesComponent implements OnInit {

  profesionales:Profesional[]
  constructor( private usuariosService: UsuariosService ) { }

  ngOnInit(): void {
    this.usuariosService.getProfesionales().subscribe(resp=>{
      this.profesionales=resp;
    })
  }

}
