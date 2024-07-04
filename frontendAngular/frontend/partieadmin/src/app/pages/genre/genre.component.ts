import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Genre } from 'src/app/monClasses/genre';
import { GenreService } from 'src/app/monServices/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genreList: Genre[];
  genre: Genre={
    id: 0,
    nomGenere: ''
  };
  message: string;
  messagedelete: string;

  constructor(private service: GenreService) { }

  ngOnInit() {
   this.allGenre()
  }
allGenre(){
  this.service.allgenre().subscribe((cyrine:Genre[]) => {
    this.genreList = cyrine;
  },
  error => {
    console.log(error);
  }
);
}
addGenre(form:NgForm){
  this.service.ajouterGenre(this.genre).subscribe((data:Genre)=>{
    console.log(data)
    if(data !== null)
    {
      this.message="GENRE AJOUTER AVEC SUCCESS"
      this.allGenre()
      form.resetForm()

    }else{
      this.message="GENRE EXIST DANS LA BASE DE DONNE "
      this.allGenre()
    }
  })
}
delete(id: number) {
console.log(id)
this.service.delete(id).subscribe(data=>{
this.messagedelete="GENRE  "+id+"  deleted"
  this.allGenre()
})
   }
  edit(id: number) {
    this.service.findById(id).subscribe((data:Genre)=>{
      this.genre=data;
    })
   }
}
