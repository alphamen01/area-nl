import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/models/area.model';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
areas:Area[] = [];
areadata!: Area;

stringOne: string = "A";
stringTwo: string = "I";
constructor(private areaService: AreaService){
}

ngOnInit(): void {

  this.obtenerAreas();
}

obtenerAreas(){
  this.areaService.getAllAreas().subscribe({
    next:(data) =>{
      this.areas = data;
       console.log(data);
    },error:(e)=>{}
  })
}

obtenerArea(id:number){
  this.areaService.getArea(id).subscribe({
    next:(dataarea) =>{
      this.areadata = dataarea
       console.log(dataarea);
    },error:(e)=>{}
  })
}

}
