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
    this.fileService.referenciaCloudStorage(resp.email+"_img1").subscribe( ref=>{
        this.imagen1=ref;
     });
     this.fileService.referenciaCloudStorage(resp.email+"_img2").subscribe( ref2=>{
      this.imagen2=ref2;
   })
   }).finally(()=>{
     Swal.close();
   })
  }

}
