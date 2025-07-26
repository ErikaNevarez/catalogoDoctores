import { Component, importProvidersFrom } from '@angular/core';
import { DoctoresService } from '../../doctores.service';
import { Personal } from '../../../Models/personal';

@Component({
  selector: 'app-eliminar-doctores',
  imports: [],
  templateUrl: './eliminar-doctores.component.html',
  styleUrl: './eliminar-doctores.component.css'
})

export class EliminarDoctoresComponent {

  mensajeEliminado:string='';
  timeoutId:any;

  doctores: Personal[]=[];

  constructor (private servicio:DoctoresService){}; 

  ngOnInit():void{
    this.cargarDoctores();

  }

  cargarDoctores():void{
    this.doctores=this.servicio.getAll(); 
  }
  
  
  eliminarDoctor(id:number){
    this.servicio.delete(id);
    console.log (`Doctor con id ${id} eliminado`); 
    this.cargarDoctores(); 
    this.mensajeEliminado=`Doctor con id ${id} eliminado`; 

    //cancelar cualquier temporizador anterior
    clearTimeout(this.timeoutId);

    //iniciar un nuevo temporizador que dure 3 segundos 
    this.timeoutId=setTimeout( ()=> {
      this.mensajeEliminado=""
    },3000);
  } //fin del método




}
