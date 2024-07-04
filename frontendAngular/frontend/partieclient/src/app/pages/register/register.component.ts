import { Component } from '@angular/core';
import { Client } from '../../monClasses/Client';
import { ClientService } from '../../monServices/client.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UtilisateurService } from '../../monServices/utilisateur.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  message: string;
  client: Client={
    id: 0,
    nom: '',
    prenom: '',
    username: '',
    password: '',
    roles: [],
    etat: true
  };
constructor(private clientService:UtilisateurService, private router:Router){}
ngOnInit(): void {
 }
register(form: NgForm) {
  if (form.valid) {
 this.clientService.saveClient(this.client).subscribe((data:Client)=>{
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
