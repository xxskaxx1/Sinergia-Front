import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../interface/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  baseURL ='http://localhost/sinergia/public/api/';

  constructor(private http: HttpClient) { }

  getPersona(consecutivo: number): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.baseURL + 'getFicha/' + consecutivo);
  }
}
