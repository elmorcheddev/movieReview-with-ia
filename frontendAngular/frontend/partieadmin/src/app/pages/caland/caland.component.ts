import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalandrierMovie } from 'src/app/monClasses/CalandrierMovie';
import { Acteur } from 'src/app/monClasses/acteur';
import { Director } from 'src/app/monClasses/director';
import { Films } from 'src/app/monClasses/films';
import { Genre } from 'src/app/monClasses/genre';
import { CalandrierMovieService } from 'src/app/monServices/CalandrierMovie.service';
import { FilmService } from 'src/app/monServices/film.service';

@Component({
  selector: 'app-caland',
  templateUrl: './caland.component.html',
  styleUrls: ['./caland.component.css']
})
export class CalandComponent implements OnInit{
delete(arg0: number) {
throw new Error('Method not implemented.');
}
edit(arg0: number) {
throw new Error('Method not implemented.');
}
  listFilm: Films[];
  calan: CalandrierMovie = {
    id: 0,
    showDate: '',
    films: {
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
    }
  }
  calaList: CalandrierMovie[];
  ngOnInit(): void {
    this.getAllMovies()
    this.listCaland()
  }
constructor(private filmService:FilmService, private calanService:CalandrierMovieService){}
public getAllMovies(){
  this.filmService.listFilm().subscribe((data:Films[])=>{
    this.listFilm=data;
  })
}
public saveCalan(form:NgForm){
  this.calanService.save(this.calan).subscribe((data:CalandrierMovie)=>{
    console.log(data)
    this.listCaland()
  })
}
  listCaland() {
    this.calanService.listCalan().subscribe((data:CalandrierMovie[])=>{
      this.calaList=data
    })
   }
}
