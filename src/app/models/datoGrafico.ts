export class DatoGrafico{
    name:string;
    data:number[]

    constructor(name:string,data:number[]){
        this.name=name;
        this.data=data;
    }
}
export class DatoGraficoPie{
    
    type='pie'
    name:string;
    data:any[]=[];

    constructor(name:string,y:number){
        this.name=name;
        this.data.push({name:name,y:y});
    }
}