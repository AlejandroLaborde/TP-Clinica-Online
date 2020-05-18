import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private storage: AngularFireStorage) { 

  }

  public subirArchivo(nombreArchivo: string, datos: any) {
    this.storage.upload(nombreArchivo, datos).then((asd)=>{
      console.log(asd);
    });
  }

  public referenciaCloudStorage(nombreArchivo: string) {
        return this.storage.ref(nombreArchivo).getDownloadURL();
  }
  
}
