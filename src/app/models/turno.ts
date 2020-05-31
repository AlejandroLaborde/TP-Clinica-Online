import { Profesional } from './profesional';
import { Especialidad } from './especialidad';
import { Usuario } from './usuario';
import { EncuestaProfesional } from './EncuestaProfesional';
import { EncuestaPaciente } from './EncuestaPaciente';



export class Turno{

    public id:string;
    public hora:string;
    public dia:string;
    public especialidad:Especialidad;
    public profesional:Profesional;
    public paciente:Usuario;
    public estado:String;
    public encuestaProfesional:EncuestaProfesional;
    public encuestaPaciente:EncuestaPaciente;

    constructor( hora:string,dia:string,especialidad:Especialidad,profesional:Profesional,estado:string ,paciente?:Usuario , id?:string ){
        
        this.hora=hora;
        this.dia=dia;
        this.especialidad=especialidad;
        this.profesional=profesional;
        this.estado=estado;
        if(paciente){
            this.paciente=paciente;
        }
        
        if(id){
            this.id=id;
        }
    }
}