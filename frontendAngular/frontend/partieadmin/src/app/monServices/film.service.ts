import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../monClasses/genre';
import { Acteur } from '../monClasses/acteur';
import { Director } from '../monClasses/director';
import { Films } from '../monClasses/films';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
PATH_PROJECT="http://localhost:8080/film/"
  constructor(private httpClient:HttpClient) { }

  public listFilm():Observable<Films[]>{
    return this.httpClient.get<Films[]>(`${this.PATH_PROJECT+"all"}`)
  }
  public addNewFilm(formData:FormData):Observable<Films>{
    return this.httpClient.post<Films>(`${this.PATH_PROJECT+"save"}` , formData)
  }
  public getFilmById(id:number):Observable<Films>{
    return this.httpClient.get<Films>(`${this.PATH_PROJECT+"byId/"+id}`)
  }
  public deleteFilm(id:number):Observable<Films>{
    return this.httpClient.get<Films>(`${this.PATH_PROJECT+"delete/"+id}`)
  }
}
