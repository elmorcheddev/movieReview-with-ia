import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Acteur } from 'src/app/monClasses/acteur';
import { ActeurService } from 'src/app/monServices/acteur.service';

@Component({
  selector: 'app-acteur',
  templateUrl: './acteur.component.html',
  styleUrls: ['./acteur.component.css']
})
export class ActeurComponent implements OnInit{


  listActeur: Acteur[];
  imgActeur: any;
  acteur: Acteur={
    id: 0,
    image: '',
    name: '',
    nationality: '',
    birthdate: ''
  };
  image: string | Blob;
  ngOnInit(): void {
    this.getlistActeur()
   }
constructor(private acteurService:ActeurService){

}
public addActeur(form:NgForm){
  const formData = new FormData()
  formData.append("image" , this.imgActeur)
  formData.append("acteur" , new Blob([JSON.stringify(this.acteur)], { type: 'application/json' }));
this.acteurService.saveActeur(formData).subscribe((data:Acteur)=>{
  console.log(data)
  if(data !== null){
    this.getlistActeur()
    form.resetForm()
  }
})
}
public getlistActeur(){
  this.acteurService.listActeur().subscribe((data:Acteur[])=>{
    this.listActeur=data
    console.log(data)
  })
}
delete(id: number) {
  this.acteurService.deleteActeurById(id).subscribe((data:Acteur)=>{
    if(data == null){
      window.alert("Acteur a ete supprimer !!")
      this.getlistActeur()
    }
  })
  }
  edit(id: number) {
this.acteurService.acteurById(id).subscribe((data:Acteur)=>{
  this.acteur=data
})
   }
  
 
onFileSelcted(event: any) {
  this.imgActeur =  event.target.files[0]
  console.log(event.target.files[0])
}
}
