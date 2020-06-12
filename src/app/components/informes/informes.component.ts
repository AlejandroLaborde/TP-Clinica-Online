import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {

  constructor(  ) { }

  ngOnInit(): void {
  }


}
