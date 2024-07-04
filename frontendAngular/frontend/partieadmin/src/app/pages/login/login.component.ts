 import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from 'src/app/monServices/admin-auth.service';
import { AdminService } from 'src/app/monServices/admin.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  utilisateur: any;
  constructor(private router: Router, private adminService: AdminService, private authAdmin: AdminAuthService) {}
  ngOnInit(): void {
   }
   login(form: NgForm) {
    console.log(form.value)
    this.adminService.loginAdmin(form.value).subscribe(
      (data: any) => {
        console.log(data)
        this.authAdmin.setRoles(data.utilisateur.roles);
        this.authAdmin.setToken(data.token);
        const roles = data.utilisateur.roles[0].nomroleUtilisateur;
     
        window.alert("Bien venu " + data.utilisateur.username);
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        })
      }),
      (error: HttpErrorResponse) => {
        if (error.status==403) {
          console.log("Vérifier votre nom d'utilisateur ou votre mot de passe.");
        }
      }
    
  }
  
}
