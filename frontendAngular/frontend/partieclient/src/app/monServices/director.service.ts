import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../monClasses/genre';
import { Acteur } from '../monClasses/acteur';
import { Director } from '../monClasses/director';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {
PATH_PROJECT="http://localhost:8080/director/"
  constructor(private httpClient:HttpClient) { }

  public listDirec():Observable<Director[]>{
    return this.httpClient.get<Director[]>(`${this.PATH_PROJECT+"allForClient"}`)
  }
public saveDirec(formData:FormData):Observable<Acteur>{
    return this.httpClient.post<Director>(`${this.PATH_PROJECT+"add"}`,formData)
}
public direcById(id:number):Observable<Director>{
    return this.httpClient.get<Director>(`${this.PATH_PROJECT+"byIdForClient/"+id}`)
  }
  public deleteDirecById(id:number):Observable<Director>{
    return this.httpClient.get<Director>(`${this.PATH_PROJECT+"delete/"+id}`)
  }
}