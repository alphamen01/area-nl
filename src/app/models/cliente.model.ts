import { Area } from "./area.model";

export interface Cliente {
    id_cliente: number;
    nombre: string;
    direccion: string;
    telefono: string;
    areas: Area[];
  }