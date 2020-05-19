import { Component, OnInit, Input } from '@angular/core';
import { Profesional } from 'src/app/models/profesional';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent implements OnInit {

  @Input() profesionales:Profesional[];
  constructor() { }

  ngOnInit(): void {
  }

}
