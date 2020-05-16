import { Usuario } from './usuario';
import { Especialidad } from './especialidad';





export class Profesional extends Usuario{

    private especialidades: Especialidad[];
    
    constructor( usuario:Usuario, especialidad:Especialidad[] ){
        super(usuario.nombre,usuario.apellido,usuario.edad,usuario.mail,usuario.contraseña,usuario.validoCuenta);
        this.especialidades=especialidad;
    }

}