import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Acteur } from 'src/app/monClasses/acteur';
import { Director } from 'src/app/monClasses/director';
import { Films } from 'src/app/monClasses/films';
import { Genre } from 'src/app/monClasses/genre';
import { ActeurService } from 'src/app/monServices/acteur.service';
import { DirectorService } from 'src/app/monServices/director.service';
import { FilmService } from 'src/app/monServices/film.service';
import { GenreService } from 'src/app/monServices/genre.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {


  listFilm: Films[];
  listGenere: Genre[];
  listAct: Acteur[];
  listDirector: Director[];
  base: string | Blob;
  cov: string | Blob;
  films: Films={
    id: 0,
    title: '',
    description: '',
    releaseDate: '',
    genre: new Genre,
    director: new Director,
    acteur: new Acteur,
    imageCov: '',
    imageBase: '',
    duree: 0,
    calandrierMovies: []
  };
  ngOnInit(): void {
    this.getAllFilms()
    this.getAllGenre()
    this.getAllActeur()
    this.getAllDirect()
  }
constructor(private filmsService:FilmService , private genService: GenreService  , private router:Router,
            private actService:ActeurService , private direcService:DirectorService ){}


public addNewFilms(form:NgForm){
  const formData= new FormData()
  formData.append("base" , this.base)
  formData.append("cov" , this.cov)

  formData.append("films" , new Blob([JSON.stringify(this.films)], { type: 'application/json' }));
 this.filmsService.addNewFilm(formData).subscribe((data:Films)=>{
  if(data !== null){
    window.alert("film ajouter avec success")
    this.getAllFilms()
    form.resetForm()
  }
 })

}

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
selectFileCov(event: any) {
  this.cov = event.target.files[0]
    console.log(event.target.files[0])
}
  selectFileBase(event: any) {
    this.base = event.target.files[0]
    console.log(event.target.files[0])
  }
  public findByID(id:number){
    this.filmsService.getFilmById(id).subscribe((data:Films)=>{
      this.films=data
    })
  }
  deleteById(id: number) {
    if(confirm("are you sure to delete this movie")){
      this.filmsService.deleteFilm(id).subscribe((data=>{
  console.log(data)
  if(data==null){
    alert("film delted with success")
    this.router.navigate(['/films']).then(()=>{
      location.reload()
    })
  }
}))
    }

  }
}
