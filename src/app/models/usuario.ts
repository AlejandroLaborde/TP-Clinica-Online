


export class Usuario{

    public nombre: string;
    public apellido: string;
    public edad: number;
    public mail: string;
    public contraseña: string;
    public validoCuenta: boolean;
    public id:string;

    constructor(nombre: string,apellido: string,edad: number,mail: string,contraseña: string,validoCuenta: boolean){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.mail=mail;
        this.contraseña=contraseña;
        this.validoCuenta=validoCuenta;
    }

}