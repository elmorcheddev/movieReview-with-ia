import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 
import { UtilisateurService } from '../../monServices/utilisateur.service';
import { ClientAuthService } from '../../monServices/client-auth.service';
import { ClientService } from '../../monServices/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  utilisateur: any;
  constructor(private router: Router, private clientService: ClientService, private authClient: ClientAuthService) {}
  ngOnInit(): void {
   }
   login(form: NgForm) {
    console.log(form.value)
    this.clientService.loginAdmin(form.value).subscribe(
      (data: any) => {
        console.log(data)
         this.authClient.setRoles(data.utilisateur.roles);
        this.authClient.setToken(data.token);
        const roles = data.utilisateur.roles[0].nomroleUtilisateur;
        if(data.utilisateur.etat){
          window.alert("Bien venu " + data.utilisateur.username);
          this.router.navigate(['/home']).then(() => {
             window.location.reload();
            });
        }else{
          window.alert("Votre compt a ete desactive ");
          this.router.navigate(['/login'])
          this.authClient.clear()
        }
      
   },
      (error: any) => {
        if (error.status) {
          
          window.alert("Vérifier votre nom d'utilisateur ou votre mot de passe.");
          this.router.navigate(['/login']);
        }
      }
    );
  }
  
}
