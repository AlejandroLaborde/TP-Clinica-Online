import { Component, OnInit, Input } from '@angular/core';
import { Profesional } from 'src/app/models/profesional';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {

  @Input() profesional:Profesional;

  constructor() { }

  ngOnInit(): void {
  }

}
