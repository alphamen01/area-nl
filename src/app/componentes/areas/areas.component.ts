import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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

modalTitle: string = 'Agregar';
adddata?:Area;

constructor(private areaService: AreaService, private fb: FormBuilder, private toastr: ToastrService){

  this.agregarArea = this.fb.group({
    descripcion:['', Validators.required],
    id_cliente:['', Validators.required],
    enu_estado_registro:['', Validators.required]    
  })
}

openModal(id?:number): void {
  
  this.modalTitle = id ? 'Editar' : 'Agregar';
  //console.log(id);
    if(id !== undefined){
    this.areaService.getArea(id!).subscribe({
      next:(dataarea) =>{
        this.adddata = dataarea
        //console.log(this.adddata);
        this.agregarArea.patchValue({
          descripcion: dataarea.descripcion,
          id_cliente: dataarea.id_cliente,
          enu_estado_registro: dataarea.enu_estado_registro
        })

      },error:(e)=>{}
    })
    }else{
      this.adddata = undefined;
    }
    
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

// agregar(id?:number){
//   //console.log(this.agregarArea);
//   console.log(id);
//   const area : Area={
//     descripcion:this.agregarArea.get('descripcion')?.value,
//     id_cliente:this.agregarArea.get('id_cliente')?.value,
//     enu_estado_registro:this.agregarArea.get('enu_estado_registro')?.value,
//     usuario_creacion: 'Luis',
//     fecha_creacion: new Date
//   }
//   //console.log(area);
//   this.areaService.addCurso(area).subscribe(data =>{
//     console.log(data);
//     this.obtenerAreas();
//   },
//   error => {
//     console.error('Error en la solicitud:', error);
//   })

//   this.agregarArea.reset();
// }

agregar(id?: number | null){
  //console.log(id);
  if (id == undefined || id === 0) {
        //AGREGAR
    const area : Area={
      descripcion:this.agregarArea.get('descripcion')?.value,
      id_cliente:this.agregarArea.get('id_cliente')?.value,
      enu_estado_registro:this.agregarArea.get('enu_estado_registro')?.value,
      usuario_creacion: 'Luis',
      fecha_creacion: new Date    
    }
    //console.log(area);
      this.areaService.addArea(area).subscribe(data =>{
      //console.log(data);
      this.toastr.success('El area fue creado con exito!', 'Registro creado');
      this.obtenerAreas();
    },
      error => {
        console.error('Error en la solicitud:', error);
    })
    
  }
   else{
     
    //console.log(id);

    //EDITAR    
    const area : Area={
      id_area: this.adddata?.id_area,
      descripcion:this.agregarArea.get('descripcion')?.value,
      id_cliente:this.agregarArea.get('id_cliente')?.value,
      enu_estado_registro:this.agregarArea.get('enu_estado_registro')?.value,
      usuario_creacion: this.adddata?.usuario_creacion,
      fecha_creacion:this.adddata?.fecha_creacion,
      usuario_modificacion: 'Luis modifica',
      fecha_modificacion: new Date 
     }

     //console.log(area);
     this.areaService.updateArea(id,area).subscribe(data =>{
      //console.log(data);
      this.toastr.info('El area fue actualizado con exito!', 'Registro actualizado');
      this.obtenerAreas();
    },
      error => {
        console.error('Error en la solicitud:', error);
    })
  }
  
  this.agregarArea.reset();
  
}

}
