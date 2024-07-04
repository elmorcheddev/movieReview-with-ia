import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../monClasses/genre';
import { Reservation } from '../monClasses/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservService {
PATH_PROJECT="http://localhost:8080/api/reservations"
  constructor(private httpClient:HttpClient) { }

  envoyerReserv(res:FormData):Observable<Reservation>{
    return this.httpClient.post<Reservation>(`${this.PATH_PROJECT+"/saveRes"}`,res)
  }
  getByClient(id:number):Observable<Reservation[]>{
    return this.httpClient.get<Reservation[]>(`${this.PATH_PROJECT+"/byclient/"+id}`)
  }
}
