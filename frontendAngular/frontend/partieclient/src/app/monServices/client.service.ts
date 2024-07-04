import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientAuthService } from './client-auth.service';
import { Client } from '../monClasses/Client';
  
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
PATH_APP="http://localhost:8080/auth"
  constructor(private httpClient:HttpClient,private clientAuthService:ClientAuthService) { }
  requestHeader = new HttpHeaders({
	   
		   "No-Auth":"True" 
	   }
  )
  public loginAdmin(loginData:any){
	  return this.httpClient.post<any>(`${this.PATH_APP+"/login"}`,loginData,{headers:this.requestHeader})
  }
 

  getUserInformation(): Observable<any> {
    const token = this.clientAuthService.getToken(); // Get token from storage or service

    if (!token) {
      throw new Error('No authentication token found');
    }

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.httpClient.get<any>(this.PATH_APP+"/getConnectedUser", { headers });
  }
  public rolesMatch(allowedRoles:any):boolean{
	 let isMatch=false;
	 const adminRoles:any=this.clientAuthService.getRoles();
	 if(adminRoles != null && adminRoles){
		 for(let i=0 ; i<adminRoles.length; i++){
			 for(let j=0;j<allowedRoles.length;j++){
				if(adminRoles[i].nomRoles === allowedRoles[j]){
					 isMatch=true;
				 return isMatch;
				}else{
					return isMatch;
				}
				
			 }
		 }
		 
	 }
	 return isMatch;
	 }
	  
 public getUser(email:string):Observable<Client>{
	   return this.httpClient.get<Client>(`${this.PATH_APP+"/findbyEmail/"+email}`)
   }
 getUserInfo(): Observable<Client> {
    const token = this.clientAuthService.getToken();   
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Client>(`${this.PATH_APP+"/user-info"}`, { headers });
  }
}