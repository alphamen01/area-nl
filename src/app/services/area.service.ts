import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from '../models/area.model';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

//private baseApiURL: string = "https://localhost:5001/api/"
private baseApiURL: string = "https://webapiarea.azurewebsites.net/api/"

  constructor(private http: HttpClient) { }

  getAllAreas(): Observable<Area[]>{
    return this.http.get<Area[]>(`${this.baseApiURL}areas`)
  }

  getArea(id:number): Observable<Area>{
    return this.http.get<Area>(`${this.baseApiURL}area/${id}`)
  }

  deleteArea(id:number): Observable<void>{
    return this.http.delete<void>(`${this.baseApiURL}area/${id}`);
  }

  addArea(area: Area): Observable<Area>{
    return this.http.post<Area>(`${this.baseApiURL}area`, area);
  }

  updateArea(id:number, area:Area): Observable<void>{
    return this.http.put<void>(`${this.baseApiURL}area/${id}`, area); 
  }


  //CLIENTES
  getAllClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.baseApiURL}clientes`)
  }
}
