import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/monClasses/utilisateur';
import { UtilisateurService } from 'src/app/monServices/utilisateur.service';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  message: string;
  utilisateur: Utilisateur={
    id: 0,
    nom: '',
    prenom: '',
    username: '',
    password: '',
    roles: [],
    etat: true
  };
constructor(private utilisateurService:UtilisateurService, private router:Router){}
ngOnInit(): void {
 }
register(form: NgForm) {
  if (form.valid) {
 this.utilisateurService.saveAdmin(this.utilisateur).subscribe((data:Utilisateur)=>{
  console.log(data)
  if(data!== null){
    this.router.navigate(['/login'])
  }else if(data==null){
    this.message="there is a account Admin exist "
    console.log(this.message)
  }
 })
}else {
  form.control.markAllAsTouched();
}
}

}
