import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { CalandrierMovie } from 'src/app/monClasses/CalandrierMovie';
import { Acteur } from 'src/app/monClasses/acteur';
import { Director } from 'src/app/monClasses/director';
import { Films } from 'src/app/monClasses/films';
import { Genre } from 'src/app/monClasses/genre';
import { CalandrierMovieService } from 'src/app/monServices/CalandrierMovie.service';
import { ActeurService } from 'src/app/monServices/acteur.service';
import { DirectorService } from 'src/app/monServices/director.service';
import { FilmService } from 'src/app/monServices/film.service';
import { GenreService } from 'src/app/monServices/genre.service';
@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.css']
})
export class AllmoviesComponent implements OnInit{
  genresByFilm: { [genre: string]: Films[] } = {};
  listFilm: Films[];
  listGenere: Genre[];
  listAct: Acteur[];
  listDirector: Director[];
  calanList: CalandrierMovie[];
  ngOnInit(): void {
 this.getAllFilms()
 this.getAllGenre()
      this.getAllActeur()
      this.getAllDirect()
      this.listCaland()
  }
  constructor(private filmsService:FilmService , private genService: GenreService  , private calanService:CalandrierMovieService,
    private actService:ActeurService , private direcService:DirectorService , private router:Router ){}
getAllFilms(){
  this.filmsService.listFilm().subscribe((data: Films[]) => {
    console.log(data)
    this.listFilm=data
    
    this.groupMoviesByGenre(); // Call the function to group movies
  });
}
listCaland() {
  this.calanService.listCalan().subscribe((data:CalandrierMovie[])=>{
    this.calanList=data
  })
 }
groupMoviesByGenre() {
  this.genresByFilm = {};
  for (const film of this.listFilm) {
    if (film.genre) { // Check if genre exists
      const genre = film.genre.nomGenere;;
      if (!this.genresByFilm[genre]) {
        this.genresByFilm[genre] = [];
      }
      this.genresByFilm[genre].push(film);
    }
  }
}
filmdetails(id: number) {
  this.router.navigate(['/filmDetails',{id}])
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
}
