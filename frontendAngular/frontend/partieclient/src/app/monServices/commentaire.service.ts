import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../monClasses/genre';
import { Acteur } from '../monClasses/acteur';
import { Director } from '../monClasses/director';
import { Commentaire } from '../monClasses/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
PATH_PROJECT="http://localhost:8080/api/comm"
  constructor(private httpClient:HttpClient) { }

  public addCommentaire(comm:FormData):Observable<Commentaire>{
    return this.httpClient.post<Commentaire>(`${this.PATH_PROJECT+"/savecomm"}`, comm)
  }
  public ListCommentByFilm(id:number):Observable<Commentaire[]>{
    return this.httpClient.get<Commentaire[]>(`${this.PATH_PROJECT+"/commByFilms/"+id}`)
  }
  public ListCommentByUtilisateur(id:number):Observable<Commentaire[]>{
    return this.httpClient.get<Commentaire[]>(`${this.PATH_PROJECT+"/byUtilisateur/"+id}`)
  }
  getHappyAvg(id:number):Observable<any>{
    return this.httpClient.get<any>(`${this.PATH_PROJECT+"/happy/"+id}`)
  }
  getSadAvg(id:number):Observable<any>{
    return this.httpClient.get<any>(`${this.PATH_PROJECT+"/sad/"+id}`)
  }
}