import { Component, OnInit } from '@angular/core'; 
import { Client } from '../../monClasses/Client';
import { ClientAuthService } from '../../monServices/client-auth.service';
import { Router } from '@angular/router';
import { Films } from '../../monClasses/films';
import { Acteur } from '../../monClasses/acteur';
import { Genre } from '../../monClasses/genre';
import { Director } from '../../monClasses/director';
import { FilmService } from '../../monServices/film.service';
import { GenreService } from '../../monServices/genre.service';
import { ActeurService } from '../../monServices/acteur.service';
import { DirectorService } from '../../monServices/director.service';
import { ClientService } from '../../monServices/client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  listFilm: Films[];
  listGenere: Genre[];
  listAct: Acteur[];
  listDirector: Director[];
  client: Client={
    id: 0,
    nom: '',
    prenom: '',
    username: '',
    password: '',
    roles: [],
    etat: false
  };
   
  ngOnInit(): void {
    if(this.authClient.isLoggedIn()){
      this.clientService.getUserInformation().subscribe((data:any)=>{
        console.log(data)
       this.client=data
       //this.nomRoles=this.admin.roles[0].nomRoles
      });} 
    this.getAllFilms()
    this.getAllGenre()
    this.getAllActeur()
    this.getAllDirect()
  }
constructor(private filmsService:FilmService , private genService: GenreService  , 
            private actService:ActeurService , private direcService:DirectorService,
          private authClient:ClientAuthService , private clientService:ClientService,
          private router:Router){}

 

public getAllFilms(){
  this.filmsService.listFilm().subscribe((data:Films[])=>{
    this.listFilm=data
  })
}
getAllGenre(){
this.genService.allgenre().subscribe((data:Genre[])=>{
  this.listGenere=data
})
}
getAllActeur(){
this.actService.listActeur().subscribe((data:Acteur[])=>{
  this.listAct=data
})
}
getAllDirect(){
this.direcService.listDirec().subscribe((data:Director[])=>{
  this.listDirector=data
})
}
goToMyProfils(){
  this.router.navigate(['/myProfils']).then(()=>{
    location.reload()
  })
}
loginOrNot(){
	return this.authClient.isLoggedIn();
}
logout(){
  this.router.navigate(['/login'])
  return this.authClient.clear()
}
byCat(id:number){
  this.router.navigate(['/filmbycat',{id}]).then(()=>{
    location.reload()
  })
}
}
