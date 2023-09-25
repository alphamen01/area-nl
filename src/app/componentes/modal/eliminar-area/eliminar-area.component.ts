import { Component, Input } from '@angular/core';
import { Area } from 'src/app/models/area.model';
import { AreaService } from 'src/app/services/area.service';
import { AreasComponent } from '../../areas/areas.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-eliminar-area',
  templateUrl: './eliminar-area.component.html',
  styleUrls: ['./eliminar-area.component.css']
})
export class EliminarAreaComponent {
  @Input() areadata!:Area;

  constructor(private areaService: AreaService, private areamethodo: AreasComponent, private toastr: ToastrService){

  }

  eliminarArea(id:number){
    if (id !== undefined && id !== 0) {
      this.areaService.deleteArea(id).subscribe(()=>{
        this.toastr.error('El area fue eliminado con exito!', 'Registro eliminado');
        this.areamethodo.obtenerAreas();
      })
    }    
  } 
}
