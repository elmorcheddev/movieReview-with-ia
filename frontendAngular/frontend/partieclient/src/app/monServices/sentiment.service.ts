import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SentimentService {

  private apiUrl = 'http://localhost:8080/api/predict';

  constructor(private http: HttpClient) { }

  getSentiment(text: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, { text }, { headers });
  }
}
