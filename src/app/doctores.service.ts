import { Injectable } from '@angular/core';
import plantilla from '../data/plantilla.json'
import { Personal } from '../Models/personal';

@Injectable({
  providedIn: 'root'
})
export class DoctoresService {
  
  doctores:Personal[]=plantilla; 

  constructor() {
    console.log("ngOnInit");
     console.log(this.doctores);
   }

  

  getAll():Personal[]{
    const recuperaDatos: Personal[]=JSON.parse(localStorage.getItem('medicos')?? '[]'); 
    if (recuperaDatos.length===0){
        this.doctores=plantilla;
    }else{
      this.doctores=recuperaDatos;

    }
      return this.doctores; 
  }
 
//AQUI ME QUEDE EN LA TAREA DEL 06JUNIO, EN LA PAGINA 5 DE clase#2 Repaso de Angular Localstorage-servicio.pdf// 

  getById(idDoc:number): Personal | null{
    const encontrado =this.doctores.find(doc=>doc.id===idDoc); 
    return encontrado || null; 
    }
  create(objeto:Personal): void{
    this.doctores.push(objeto);
    localStorage.setItem('medicos', JSON.stringify(this.doctores));
  }

  update(objeto: Personal): void{
    const index =this.doctores.findIndex(doc => doc.id===objeto.id); 
    if(index!== -1 ){
      this.doctores[index]=objeto; 
      localStorage.setItem('medicos', JSON.stringify(this.doctores)); 
    }
  }


  delete(idDoc:number):void{
    const index =this.doctores.findIndex(doc => doc.id===idDoc);
    if (index!== -1 ){
      this.doctores.splice(index,1); 
      localStorage.setItem('medicos', JSON.stringify(this.doctores));
    }
  }

}



