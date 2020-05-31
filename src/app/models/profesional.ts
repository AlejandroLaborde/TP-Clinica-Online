import { Usuario } from './usuario';
import { Especialidad } from './especialidad';
import { Dia } from './dia';





export class Profesional extends Usuario{

    public especialidades: Especialidad[];
    public aprobado: boolean;
    public dias:Dia[];

    
    constructor( usuario:Usuario, especialidad:Especialidad[] , aprobado :boolean ){
        super(usuario.nombre,usuario.apellido,usuario.edad,usuario.mail,usuario.contraseña,usuario.tipo);
        this.especialidades=especialidad;
        this.aprobado = aprobado;
        this.dias=this.cargaHorarios();
    }

    cargaHorarios(){
        let horarios=[];
        let Aux = new Dia(true,'LUNES','8:00','19:00');
        let Aux2 = new Dia(true,'MARTES','8:00','19:00');
        let Aux3= new Dia(true,'MIERCOLES','8:00','19:00');
        let Aux4 = new Dia(true,'JUEVES','8:00','19:00');
        let Aux5 = new Dia(true,'VIERNES','8:00','19:00');
        let Aux6 = new Dia(true,'SABADO','8:00','14:00');
        horarios.push(Aux);
        horarios.push(Aux2);
        horarios.push(Aux3);
        horarios.push(Aux4);
        horarios.push(Aux5);
        horarios.push(Aux6);
        
        return horarios;
    }
}