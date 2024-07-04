import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../monClasses/genre';
import { Acteur } from '../monClasses/acteur';

@Injectable({
  providedIn: 'root'
})
export class ActeurService {
PATH_PROJECT="http://localhost:8080/acteur/"
  constructor(private httpClient:HttpClient) { }

  public listActeur():Observable<Acteur[]>{
    return this.httpClient.get<Acteur[]>(`${this.PATH_PROJECT+"all"}`)
  }
public saveActeur(formData:FormData):Observable<Acteur>{
    return this.httpClient.post<Acteur>(`${this.PATH_PROJECT+"add"}`,formData)
}
public acteurById(id:number):Observable<Acteur>{
    return this.httpClient.get<Acteur>(`${this.PATH_PROJECT+"byId/"+id}`)
  }
  public deleteActeurById(id:number):Observable<Acteur>{
    return this.httpClient.get<Acteur>(`${this.PATH_PROJECT+"delete/"+id}`)
  }
}