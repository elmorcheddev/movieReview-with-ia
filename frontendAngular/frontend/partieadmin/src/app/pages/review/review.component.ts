import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commentaire } from 'src/app/monClasses/Commentaire';
import { CommentaireService } from 'src/app/monServices/commentaire.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{

  listcom: Commentaire[];
  constructor(private comService:CommentaireService , private router:Router){}
  ngOnInit(): void {
this.comService.listCommentaire().subscribe((data:Commentaire[])=>{
  this.listcom=data
})
  }
  delete(id: number) {
    if(confirm("do you want to delete this comment")){
      this.comService.deletCom(id).subscribe((data:any)=>{
        console.log(data)
        if(data==null){
          alert("Comment deleted ")
          this.comService.listCommentaire().subscribe((data:Commentaire[])=>{
            this.listcom=data
          })
        }
      })
    
    }
  }
}
