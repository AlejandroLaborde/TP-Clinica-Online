import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { RegistroService } from 'src/app/services/registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router:Router ) { 
    
  }

  ngOnInit(): void {
  }

  turnos(){
    this.router.navigate(['Turnos']);
  }



 
}
