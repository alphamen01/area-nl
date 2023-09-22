import { Component, Input } from '@angular/core';
import { Area } from 'src/app/models/area.model';
import { AreaService } from 'src/app/services/area.service';
import { AreasComponent } from '../../areas/areas.component';

@Component({
  selector: 'app-eliminar-area',
  templateUrl: './eliminar-area.component.html',
  styleUrls: ['./eliminar-area.component.css']
})
export class EliminarAreaComponent {
  @Input() areadata!:Area;

  constructor(private areaService: AreaService, private areamethodo: AreasComponent){

  }

  eliminarArea(id:number){
    if (id !== undefined && id !== 0) {
      this.areaService.deleteArea(id).subscribe(()=>{
        this.areamethodo.obtenerAreas();
      })
    }    
  } 
}
