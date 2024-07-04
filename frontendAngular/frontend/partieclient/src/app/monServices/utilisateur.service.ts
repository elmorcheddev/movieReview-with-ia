import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../monClasses/Client';
  
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  URL="http://localhost:8080/utilisateur/"
  constructor(private http:HttpClient) { }

  public getAllUtilisateur():Observable<Client[]>{
    return this.http.get<Client[]>(`${this.URL+"all"}`)
  }
 
  
  public updateUtilisateur(user:Client):Observable<Client>{
    return this.http.put<Client>(`${this.URL+"updateUtilisateur"}`,user)
  }
  public saveClient(user:Client):Observable<Client>{
    return this.http.post<Client>(`${this.URL+"saveClient"}`,user)
  }
  public getUtilisateur(id:number):Observable<Client>{
    return this.http.get<Client>(`${this.URL+"byId/"+id}`)
  }
}
