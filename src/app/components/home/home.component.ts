import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private loginService:LoginService, private usuariosService: UsuariosService) { 
    
  }

  ngOnInit(): void {
  }

  ver(){
    this.loginService.logueado();
    
  }

}
