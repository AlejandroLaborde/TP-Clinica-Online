


export class Turno{

    public hora:string;
    public idEspecialista: string;
    public idPaciente:string;
    public especialidad:string;
    public id:string;

    constructor( idEspecialista:string ,idPaciente:string, especialidad:string, horaTurno:string , id?:string ){
        
        this.hora=horaTurno;
        this.idEspecialista=idEspecialista;
        this.idPaciente=idPaciente;
        this.especialidad=especialidad;
        if(id){
            this.id=id;
        }


    }
}