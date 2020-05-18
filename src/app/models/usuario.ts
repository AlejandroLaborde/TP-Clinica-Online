


export class Usuario{

    public nombre: string;
    public apellido: string;
    public edad: number;
    public mail: string;
    public contraseña: string;
    public id:string;
    public tipo:string;

    constructor(nombre: string,apellido: string,edad: number,mail: string,contraseña: string, tipo?:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.mail=mail;
        this.contraseña=contraseña;
        if(tipo){
            this.tipo=tipo;
        }
        
    }

}