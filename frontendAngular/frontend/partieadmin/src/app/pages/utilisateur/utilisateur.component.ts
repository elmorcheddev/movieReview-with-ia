import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/monClasses/utilisateur';
import { UtilisateurService } from 'src/app/monServices/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  listutilisateur: Utilisateur[];
  constructor (private utilisateurService:UtilisateurService, private router:Router){

  }
  ngOnInit(): void { 
    this.utilisateurService.getAllUtilisateur().subscribe((data:Utilisateur[])=>{
      this.listutilisateur=data
      console.log(this.listutilisateur)
    })
  }
  activedesactive(id:number){
    this.utilisateurService.activedesactive(id).subscribe((data:Utilisateur)=>{
if(data.etat){
  alert("account activated")
  
this.router.navigate(['/listutilisateur']).then(()=>{
  location.reload()
})
}else{
  alert("account desactivated")
  
  this.router.navigate(['/listutilisateur']).then(()=>{
    location.reload()
  })
}
    })
  }
}
