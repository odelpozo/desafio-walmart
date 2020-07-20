import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { Producto } from "../models/Producto";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }



  get(recurso: any, type: any = 'json'): Observable<any> {
    return this.http.get<Producto>(`${environment.apiUrl}`+recurso, { responseType: type });
  }

}
