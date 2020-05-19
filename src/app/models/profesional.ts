import { Usuario } from './usuario';
import { Especialidad } from './especialidad';





export class Profesional extends Usuario{

    private especialidades: Especialidad[];
    private aprobado: boolean;
    
    constructor( usuario:Usuario, especialidad:Especialidad[] ){
        super(usuario.nombre,usuario.apellido,usuario.edad,usuario.mail,usuario.contraseña,usuario.tipo);
        this.especialidades=especialidad;
        this.aprobado=false;
    }

}