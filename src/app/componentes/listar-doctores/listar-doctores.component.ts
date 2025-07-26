import { Component} from '@angular/core';
import { DoctoresService } from '../../doctores.service';
import { Personal } from '../../../Models/personal';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-listar-doctores',
  imports: [CommonModule],
  templateUrl: './listar-doctores.component.html',
  styleUrl: './listar-doctores.component.css'
})
export class ListarDoctoresComponent {

    misDoctores!:Personal[];

  constructor(private doctoresService:DoctoresService){

  }

  ngOnInit(): void{
    this.misDoctores=this.doctoresService.getAll();
    console.log(this.doctoresService);

    let doc;
    doc=this.doctoresService.getById(1012);
    console.log(doc);
    doc=this.doctoresService.getById(1008);
    console.log(doc); 

    this.doctoresService.delete(1007);
    this.doctoresService.delete(1011);

    }
}