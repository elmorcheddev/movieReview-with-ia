import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../monClasses/utilisateur';
 
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  URL="http://localhost:8080/utilisateur/"
  constructor(private http:HttpClient) { }

  public getAllUtilisateur():Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(`${this.URL+"all"}`)
  }
 
  
  public updateUtilisateur(user:Utilisateur):Observable<Utilisateur>{
    return this.http.put<Utilisateur>(`${this.URL+"updateUtilisateur"}`,user)
  }
  public saveAdmin(user:Utilisateur):Observable<Utilisateur>{
    return this.http.post<Utilisateur>(`${this.URL+"saveAdmin"}`,user)
  }
  public getUtilisateur(id:number):Observable<Utilisateur>{
    return this.http.get<Utilisateur>(`${this.URL+"byId/"+id}`)
  }
  public activedesactive(id:number):Observable<Utilisateur>{
    return this.http.get<Utilisateur>(`${this.URL+"activedesactive/"+id}`)
  }
}
