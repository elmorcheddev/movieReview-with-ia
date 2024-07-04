import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 
import { CalandrierMovie } from 'src/app/monClasses/CalandrierMovie';
import { Client } from 'src/app/monClasses/Client';
import { Acteur } from 'src/app/monClasses/acteur';
import { Director } from 'src/app/monClasses/director';
import { Films } from 'src/app/monClasses/films';
import { Genre } from 'src/app/monClasses/genre';
import { Reservation } from 'src/app/monClasses/reservation';
import { Commentaire } from 'src/app/monClasses/commentaire';
import { CalandrierMovieService } from 'src/app/monServices/CalandrierMovie.service';
import { ActeurService } from 'src/app/monServices/acteur.service';
import { ClientAuthService } from 'src/app/monServices/client-auth.service';
import { ClientService } from 'src/app/monServices/client.service';
import { DirectorService } from 'src/app/monServices/director.service';
import { FilmService } from 'src/app/monServices/film.service';
import { GenreService } from 'src/app/monServices/genre.service';
import { ReservService } from 'src/app/monServices/reservation.service';
import { CommentaireService } from 'src/app/monServices/commentaire.service'; // New import

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  genresByFilm: { [genre: string]: Films[] } = {};
  listFilm: Films[];
  listGenere: Genre[];
  listAct: Acteur[];
  listDirector: Director[];
  calanList: CalandrierMovie[];
  comments: Commentaire[] ; // New property for comments
  film: Films = {
    id: 0,
    imageCov: '',
    imageBase: '',
    title: '',
    description: '',
    releaseDate: '',
    genre: new Genre(),
    director: new Director(),
    acteur: new Acteur(),
    duree: 0,
    calandrierMovies: []
  };
  listbyFilm: CalandrierMovie[];
  reserv: Reservation = {
    id: 0,
    date: "",
    films: new Films(),
    utilisateurs: new Client()
  };
  client: Client = {
    id: 0,
    nom: '',
    prenom: '',
    username: '',
    password: '',
    roles: [],
    etat: false
  };

  ngOnInit(): void {
    this.getAllFilms();
    this.getAllGenre();
    this.getAllActeur();
    this.getAllDirect();
    this.listCaland();
  }

  constructor(
    private filmsService: FilmService,
    private authClient: ClientAuthService,
    private clientService: ClientService,
    private genService: GenreService,
    private reservService: ReservService,
    private calanService: CalandrierMovieService,
    private actService: ActeurService,
    private direcService: DirectorService,
    private router: Router,
    private commentaireService: CommentaireService // New service injection
  ) {}

  getAllFilms() {
    this.filmsService.listFilm().subscribe((data: Films[]) => {
      console.log(data);
      this.listFilm = data;
      this.groupMoviesByGenre();  
    });
    if (this.authClient.isLoggedIn()) {
      this.clientService.getUserInformation().subscribe((data: Client) => {
        console.log(data);
        this.client = data;
      });
    }
  }

  listCaland() {
    this.calanService.listCalan().subscribe((data: CalandrierMovie[]) => {
      this.calanList = data;
    });
  }

  groupMoviesByGenre() {
    this.genresByFilm = {};
    for (const film of this.listFilm) {
      if (film.genre) { // Check if genre exists
        const genre = film.genre.nomGenere;
        if (!this.genresByFilm[genre]) {
          this.genresByFilm[genre] = [];
        }
        this.genresByFilm[genre].push(film);
      }
    }
  }

  filmdetails(id: number) {
    this.router.navigate(['/filmDetails', { id }]).then(() => {
      location.reload();
    });
  }

  getfilmByid(id: number) {
    this.filmsService.getFilmById(id).subscribe((data: Films) => {
      this.film = data;
      this.calanService.getCalandByFilm(data.id).subscribe((data: CalandrierMovie[]) => {
        this.listbyFilm = data;
      });
      this.getCommentsByFilm(id); // Fetch comments
    });
  }

  getCommentsByFilm(id: number) {
    this.commentaireService.ListCommentByFilm(id).subscribe((data: Commentaire[]) => {
      this.comments = data;
    });
  }

  getAllGenre() {
    this.genService.allgenre().subscribe((data: Genre[]) => {
      this.listGenere = data;
    });
  }

  getAllActeur() {
    this.actService.listActeur().subscribe((data: Acteur[]) => {
      this.listAct = data;
    });
  }

  getAllDirect() {
    this.direcService.listDirec().subscribe((data: Director[]) => {
      this.listDirector = data;
    });
  }

  envoyerReservation(form: NgForm) {
    const formData = new FormData();
    formData.append('res', new Blob([JSON.stringify(this.reserv)], { type: 'application/json' }));
    formData.append('userId', this.client.id.toString());
    formData.append('idFilm', this.film.id.toString());

    this.reservService.envoyerReserv(formData).subscribe((data: Reservation) => {
      console.log(data);
      if (data !== null) {
        alert("votre reservation a ete envoyer");
      } else {
        alert("vous avez deja envoyer une reservation");
      }
    });
  }

  isLogin() {
    return this.authClient.isLoggedIn();
  }
}
