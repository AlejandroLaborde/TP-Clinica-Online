import { Usuario } from './usuario';
import { Especialidad } from './especialidad';





export class Profesional extends Usuario{

    public especialidades: Especialidad[];
    public aprobado: boolean;
    public tiempoTurno: number;
    
    constructor( usuario:Usuario, especialidad:Especialidad[] , aprobado :boolean ){
        super(usuario.nombre,usuario.apellido,usuario.edad,usuario.mail,usuario.contraseña,usuario.tipo);
        this.especialidades=especialidad;
        this.aprobado = aprobado;
        this.tiempoTurno=30;
    }

}