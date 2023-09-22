import { Component, Input } from '@angular/core';
import { Area } from 'src/app/models/area.model';

@Component({
  selector: 'app-detalle-area',
  templateUrl: './detalle-area.component.html',
  styleUrls: ['./detalle-area.component.css']
})
export class DetalleAreaComponent {
  @Input() areadata!:Area;
  stringOne: string = "A";
  stringTwo: string = "I";
}
