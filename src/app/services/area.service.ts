import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from '../models/area.model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

private baseApiURL: string = "https://localhost:5001/api/"

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
}
