import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FileService } from 'src/app/services/file.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  usuario;
  imagen1;
  imagen2;
  constructor(private logginService:LoginService, private usuarioService:UsuariosService, private fileService:FileService) { }

  ngOnInit(): void {
    Swal.showLoading();
   this.logginService.angularFireAuth.currentUser.then(resp=>{

    this.usuarioService.getDatosPersona(resp.email).subscribe(resp2=>{
      this.usuario=resp2;
     });
   }).finally(()=>{
     Swal.close();
   })
  }

}
