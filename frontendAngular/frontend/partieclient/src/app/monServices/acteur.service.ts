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
    return this.httpClient.get<Acteur[]>(`${this.PATH_PROJECT+"allForClient"}`)
  }
 
public acteurById(id:number):Observable<Acteur>{
    return this.httpClient.get<Acteur>(`${this.PATH_PROJECT+"byIdForClient/"+id}`)
  }
 
}