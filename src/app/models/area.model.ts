import { Cliente } from "./cliente.model"

export interface Area {
    id_area?: number,
    descripcion: string,
    id_cliente: number,
    enu_estado_registro: string,
    usuario_creacion?: string,
    fecha_creacion?: Date,
    usuario_modificacion?: string,
    fecha_modificacion?: Date
    clienteFK: Cliente
}
