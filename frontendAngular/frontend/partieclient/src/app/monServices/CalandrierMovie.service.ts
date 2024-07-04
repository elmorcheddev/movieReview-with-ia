import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../monClasses/genre';
import { Acteur } from '../monClasses/acteur';
import { CalandrierMovie } from '../monClasses/CalandrierMovie';

@Injectable({
  providedIn: 'root'
})
export class CalandrierMovieService {
PATH_PROJECT="http://localhost:8080/calandrierMovie/"
constructor(private httpClient:HttpClient) { }
 
public listCalan():Observable<CalandrierMovie[]>{
    return this.httpClient.get<CalandrierMovie[]>(`${this.PATH_PROJECT+"listForClient"}`)
}
public getCalandByFilm(id:number):Observable<CalandrierMovie[]>{
  return this.httpClient.get<CalandrierMovie[]>(`${this.PATH_PROJECT+"filmByCalandForClient/"+id}`)

}
}