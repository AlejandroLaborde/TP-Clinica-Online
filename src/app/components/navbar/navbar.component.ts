import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.loginService.logOut().then(resp=>{
      console.log(resp);
    });
  }

  miPerfil(){
    this.router.navigate(['MiPerfil']);
  }

  cambiarpagina( pagina:string){

    switch(pagina){
      case 'Turnos':
        this.router.navigate(['Turnos']);
        break;
      case 'Home':
        this.router.navigate(['Home']);
        break;
    }
  }
  
}
