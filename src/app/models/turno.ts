


export class Turno{

    public hora:string;
    public dia:string;
    public idEspecialista: string;
    public nombreEspecialista: string;
    public idPaciente:string;
    public nombrePaciente:string;
    public especialidad:string;
    public id:string;

    constructor( idEspecialista:string ,nombreEspecialista:string , idPaciente:string,nombrePaciente:string, especialidad:string, horaTurno:string , dia:string , id?:string ){
        
        this.hora=horaTurno;
        this.idEspecialista=idEspecialista;
        this.nombreEspecialista = nombreEspecialista;
        this.nombrePaciente = nombrePaciente;
        this.idPaciente=idPaciente;
        this.especialidad=especialidad;
        this.dia=dia;
        if(id){
            this.id=id;
        }
    }
}