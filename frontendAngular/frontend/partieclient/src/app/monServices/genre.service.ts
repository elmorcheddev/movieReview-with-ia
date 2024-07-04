import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../monClasses/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
PATH_PROJECT="http://localhost:8080/genre/"
  constructor(private httpClient:HttpClient) { }

  allgenre():Observable<Genre[]>{
    return this.httpClient.get<Genre[]>(`${this.PATH_PROJECT+"allForClient"}`)
  }
  ajouterGenre(gen:Genre):Observable<Genre>{
    return this.httpClient.post<Genre>(`${this.PATH_PROJECT+"add"}`,gen)
  }
  findById(id:number):Observable<Genre>{
    return this.httpClient.get<Genre>(`${this.PATH_PROJECT+"findbyId/"+id}`)
  }
  delete(id:number){
    return this.httpClient.delete(`${this.PATH_PROJECT+"delete/"+id}`)
  }
}
