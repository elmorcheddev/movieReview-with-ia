import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';  
import { Films } from '../../monClasses/films';
import { Genre } from '../../monClasses/genre';
import { Director } from '../../monClasses/director';
import { Acteur } from '../../monClasses/acteur';
import { CalandrierMovie } from '../../monClasses/CalandrierMovie';
import { Commentaire } from '../../monClasses/commentaire';
import { CalandrierMovieService } from '../../monServices/CalandrierMovie.service';
import { FilmService } from '../../monServices/film.service';
import { CommentaireService } from '../../monServices/commentaire.service';
import { ClientAuthService } from 'src/app/monServices/client-auth.service';
import { ClientService } from 'src/app/monServices/client.service';
import { Client } from 'src/app/monClasses/Client';
import { ReservService } from 'src/app/monServices/reservation.service';
import { Reservation } from 'src/app/monClasses/reservation';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  id: number;
  film: Films={
    id: 0,
    imageCov: '',
    imageBase: '',
    title: '',
    description: '',
    releaseDate: '',
    genre: new Genre,
    director: new Director,
    acteur: new Acteur,
    duree: 0,
    calandrierMovies: []
  };
  listCalanByFilm: CalandrierMovie[];
  commenatire: Commentaire={
    id: 0,
    commentaire: '',
    films: new Films,
    sentiment: '',
    utilisateurs: new Client
  };
  listCommFilm: Commentaire[];
  client: Client ={
    id: 0,
    nom: '',
    prenom: '',
    username: '',
    password: '',
    roles: [],
    etat: false
  };
  nomRoles: any;
  listbyFilm: CalandrierMovie[];
  reserv: Reservation={
    id: 0,
    date: '',
    films: new Films,
    utilisateurs: new Client
  };
  positiverating: number;
  nigativeating: number;
  nbrcomments: number;
  constructor(private activRoute:ActivatedRoute,private router:Router ,private reservService:ReservService,
    private authClient:ClientAuthService ,private clientService :ClientService, 
    private calanService:CalandrierMovieService, private filmService:FilmService,
        private commService:CommentaireService){}

  ngOnInit(): void {
    this.activRoute.params.subscribe(params => {
      this.id = +params['id'];  
        this.filmService.getFilmById(this.id).subscribe((data:Films)=>{
      this.film=data
      this.commenatire.films.id=data.id
      this.calanService.getCalandByFilm(data.id).subscribe((data:CalandrierMovie[])=>{
        this.listCalanByFilm=data
      })
      this.commService.ListCommentByFilm(this.id).subscribe((data:Commentaire[])=>{
        this.listCommFilm=data
        this.nbrcomments=data.length
        console.log(data)
      })
    })})
    if (this.authClient.isLoggedIn()) {
      this.clientService.getUserInformation().subscribe((data: Client) => {
        console.log(data)
        this.client = data
       });
    }
    this.getHappyAvg()
    this.getSadAvg()
  }
  public saveNewCommentaire(form:NgForm){
    const formData = new FormData();
     formData.append('comm', new Blob([JSON.stringify(this.commenatire)], { type: 'application/json' }));

     formData.append('userId', this.client.id.toString());
     formData.append('idFilm', this.film.id.toString());

    this.commService.addCommentaire(formData).subscribe((data:Commentaire)=>{
        console.log(data)
        this.commService.ListCommentByFilm(this.id).subscribe((data:Commentaire[])=>{
          this.listCommFilm=data
          this.nbrcomments=data.length

         })
         this.commenatire.commentaire=''
         this.getHappyAvg()
         this.getSadAvg()
    })
  }
  loginOrNot(){
    return this.authClient.isLoggedIn();
  }
  getfilmByid(id:number){
    this.filmService.getFilmById(id).subscribe((data:Films)=>{
      this.film=data
      this.calanService.getCalandByFilm(data.id).subscribe((data:CalandrierMovie[])=>{
          this.listbyFilm=data
      })
    })
   }
   
  envoyerReservation(form:NgForm){
  
    const formData = new FormData();
     formData.append('res', new Blob([JSON.stringify(this.reserv)], { type: 'application/json' }));

     formData.append('userId', this.client.id.toString());
     formData.append('idFilm', this.film.id.toString());

    this.reservService.envoyerReserv(formData).subscribe((data:Reservation)=>{
        console.log(data)
        if(data!== null){
          alert("votre reservation a ete envoyer ")
        }else{
          alert("vous avez deja envoyer une reservation")
        }
    })
  
}
 getHappyAvg(){
  this.commService.getHappyAvg(this.id).subscribe((data:any)=>{
    console.log(data)
    this.positiverating=data
  })
 }
 getSadAvg(){
  this.commService.getSadAvg(this.id).subscribe((data:any)=>{
    console.log(data)
    this.nigativeating=data
  })
 }
}
