

export class Especialidad{

    public codigo:string;
    public descripcion:string;
    public duracion:number;

    constructor( codigo:string, descripcion:string ){
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.duracion=30;
    }

}