import { Component } from '@angular/core';
import { Personal } from '../../../Models/personal';
import { DoctoresService } from '../../doctores.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-agregar-doctores',
  imports: [FormsModule],
  templateUrl: './agregar-doctores.component.html',
  styleUrl: './agregar-doctores.component.css'
})
export class AgregarDoctoresComponent {

  mensajeExito:string=''; 

  doctor: Personal = {
    id: 0,
    nombre: '',
    especialidad: '',
    anios_experiencia: 0,
    ciudad: '',
    telefono: '',
    foto: ''
}; 

constructor (private doctoresService:  DoctoresService) {  }

    esFemenino:boolean=false; 

    asignarFotoAleatoria(){
      let genero;
      const id=Math.floor(Math.random()*100);
      if(this.esFemenino){
        genero='women';
      }else{
        genero='men'; 
      }
      this.doctor.foto=`https://randomuser.me/api/portraits/${genero}/${id}.jpg`;
      }

guardar(){ 
  this.doctoresService.create(this.doctor);
  this.limpiar();
  console.log('Doctor:', this.doctor);
  console.log('¿Es femenino?:', this.esFemenino);
}

limpiar():void{
  this.doctor={
    id: 0,
    nombre: '',
    especialidad: '',
    anios_experiencia: 0,
    ciudad: '',
    telefono: '',
    foto: ''
    };

    this.esFemenino=false;

    this.mensajeExito='¡Formulario enviado exitosamente!';

    setTimeout(() => {
      this.mensajeExito='';
    }, 3000);
  }

}



