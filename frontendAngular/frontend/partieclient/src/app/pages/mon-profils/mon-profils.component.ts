import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/monClasses/Client';
import { Commentaire } from 'src/app/monClasses/commentaire';
import { Reservation } from 'src/app/monClasses/reservation';
import { CalandrierMovieService } from 'src/app/monServices/CalandrierMovie.service';
import { ClientAuthService } from 'src/app/monServices/client-auth.service';
import { ClientService } from 'src/app/monServices/client.service';
import { CommentaireService } from 'src/app/monServices/commentaire.service';
import { FilmService } from 'src/app/monServices/film.service';
import { ReservService } from 'src/app/monServices/reservation.service';

@Component({
  selector: 'app-mon-profils',
  templateUrl: './mon-profils.component.html',
  styleUrls: ['./mon-profils.component.css']
})
export class MonProfilsComponent implements OnInit {
  reservByFilm: { [genre: string]: Reservation[] } = {};

  client: Client ={
    id: 0,
    nom: '',
    prenom: '',
    username: '',
    password: '',
    roles: [],
    etat: true
  };
  nomRoles: string;
  listReservClient: Reservation[];
   constructor(private activRoute:ActivatedRoute,private router:Router ,
    private authClient:ClientAuthService ,private clientService :ClientService, 
    private calanService:CalandrierMovieService, private filmService:FilmService,
        private reserv:ReservService){}
  ngOnInit(): void {
    if (this.authClient.isLoggedIn()) {
      this.clientService.getUserInformation().subscribe((data: Client) => {
        console.log(data)
        this.client = data
        this.nomRoles = this.client.roles[0].nomroleUtilisateur
      this.reserv.getByClient(this.client.id).subscribe((data:Reservation[])=>{
        this.listReservClient=data;
          
    this.groupMoviesByGenre();  
      })
      });
    }
  }
  groupMoviesByGenre() {
    this.reservByFilm = {};
    for (const film of this.listReservClient) {
      if (film.films) { // Check if genre exists
        const genre = film.films.title;;
        if (!this.reservByFilm[genre]) {
          this.reservByFilm[genre] = [];
        }
        this.reservByFilm[genre].push(film);
      }
    }
  }
}
