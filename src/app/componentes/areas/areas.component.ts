import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Area } from 'src/app/models/area.model';
import { Cliente } from 'src/app/models/cliente.model';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
areas:Area[] = [];
clientes:Cliente[] = [];
areadata!: Area;

estados: any[] = [
  { abrv: 'A', nombre: 'Activo' },
  { abrv: 'I', nombre: 'Inactivo' }
];

stringOne: string = "A";
stringTwo: string = "I";

agregarArea: FormGroup;

constructor(private areaService: AreaService, private fb: FormBuilder){

  this.agregarArea = this.fb.group({
    descripcion:['', Validators.required],
    id_cliente:['', Validators.required],
    enu_estado_registro:['', Validators.required]    
  })
}

ngOnInit(): void {

  this.obtenerAreas();
  this.obtenerClientes();
}

obtenerClientes(){
  this.areaService.getAllClientes().subscribe({
    next:(data) =>{
      this.clientes = data;
       //console.log(data);
    },error:(e)=>{}
  })
}

obtenerAreas(){
  this.areaService.getAllAreas().subscribe({
    next:(data) =>{
      this.areas = data;
       //console.log(data);
    },error:(e)=>{}
  })
}

obtenerArea(id:number){
  this.areaService.getArea(id).subscribe({
    next:(dataarea) =>{
      this.areadata = dataarea
       //console.log(dataarea);
    },error:(e)=>{}
  })
}

agregar(){
  //console.log(this.agregarArea);

  const area : Area={
    descripcion:this.agregarArea.get('descripcion')?.value,
    id_cliente:this.agregarArea.get('id_cliente')?.value,
    enu_estado_registro:this.agregarArea.get('enu_estado_registro')?.value,
    usuario_creacion: 'Luis',
    fecha_creacion: new Date
  }
  //console.log(area);
  this.areaService.addCurso(area).subscribe(data =>{
    console.log(data);
    this.obtenerAreas();
  },
  error => {
    console.error('Error en la solicitud:', error);
  })

  this.agregarArea.reset();
}

}
