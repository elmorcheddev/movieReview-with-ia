import { Component, OnInit } from '@angular/core';
import { CalandrierMovie } from 'src/app/monClasses/CalandrierMovie';
import { Films } from 'src/app/monClasses/films';
import { CalandrierMovieService } from 'src/app/monServices/CalandrierMovie.service';

@Component({
  selector: 'app-clandrier',
  templateUrl: './clandrier.component.html',
  styleUrls: ['./clandrier.component.css']
})
export class ClandrierComponent implements OnInit{
 
    listFilm: Films[];
   
    calaList: CalandrierMovie[];
    ngOnInit(): void {
       this.listCaland()
    }
  constructor(  private calanService:CalandrierMovieService){}
 
  listCaland() {
    this.calanService.listCalan().subscribe((data: CalandrierMovie[]) => {
       this.calaList = data.sort((a, b) => {
         const dateA = new Date(a.showDate);
        const dateB = new Date(b.showDate);
         return dateA.getTime() - dateB.getTime();
      });
    });
  }
  }
  