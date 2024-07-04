import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../monClasses/genre';
import { Acteur } from '../monClasses/acteur';
import { CalandrierMovie } from '../monClasses/CalandrierMovie';
import { Commentaire } from '../monClasses/Commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
PATH_PROJECT="http://localhost:8080/api/comm/"
constructor(private httpClient:HttpClient) { }
 
public listCommentaire():Observable<Commentaire[]>{
    return this.httpClient.get<Commentaire[]>(`${this.PATH_PROJECT+"all"}`)
}
public deletCom(id:number){
  return this.httpClient.delete(`${this.PATH_PROJECT+"delete/"+id}`)
}
}