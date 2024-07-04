import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/monClasses/utilisateur';
import { AdminAuthService } from 'src/app/monServices/admin-auth.service';
import { AdminService } from 'src/app/monServices/admin.service';
 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  utilisateur: Utilisateur={
    id: 0,
    nom: '',
    prenom: '',
    username: '',
    password: '',
    roles: [],
    etat: false
  };
  roles: any;
  nomRoles: string;
  view(nomCat: string) {
    this.router.navigate(['/sousFolder',{nomCat}])
     }
     constructor(private adminService:AdminService
        ,private authAdmin:AdminAuthService, private router:Router , private activatedRoute:ActivatedRoute){}

   ngOnInit() {
      
        if(this.authAdmin.isLoggedIn()){
          this.adminService.getUserInformation().subscribe((data:any)=>{
            console.log(data)
           this.utilisateur=data
           this.nomRoles=this.utilisateur.roles[0].nomroleUtilisateur
          });} 
    
  
  
  }
  
 loginOrNot(){
	return this.authAdmin.isLoggedIn();
}
logout(){
  this.router.navigate(['/login'])
  return this.authAdmin.clear()
}
 
  }
 
 
 


