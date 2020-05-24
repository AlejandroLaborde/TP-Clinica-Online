import { Profesional } from './profesional';
import { Especialidad } from './especialidad';
import { Usuario } from './usuario';



export class Turno{

    public id:string;
    public hora:string;
    public dia:string;
    public especialidad:Especialidad;
    public profesional:Profesional;
    public paciente:Usuario;
    public resena:String;

    constructor( hora:string,dia:string,especialidad:Especialidad,profesional:Profesional,paciente?:Usuario , id?:string ){
        
        this.hora=hora;
        this.dia=dia;
        this.especialidad=especialidad;
        this.profesional=profesional;
        if(paciente){
            this.paciente=paciente;
        }
        
        if(id){
            this.id=id;
        }
    }
}