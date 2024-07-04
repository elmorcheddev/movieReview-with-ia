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
  selector: 'app-bycat',
  templateUrl: './bycat.component.html',
  styleUrls: ['./bycat.component.css']
})
export class BycatComponent implements OnInit{
  listFilm: Films[];
  id: number;
 
  ngOnInit(): void {
    this.activRoute.params.subscribe(params => {
      this.id = +params['id'];
    this.filmsService.byCat(this.id).subscribe((data:Films[])=>{
      this.listFilm=data
    })
    })
  }
 
  constructor(private filmsService:FilmService ,private activRoute:ActivatedRoute   ,  private router:Router ){}
 
 
 
filmdetails(id: number) {
  this.router.navigate(['/filmDetails',{id}]).then(()=>{
    location.reload()
  })
   }
   
   

  
   
}
