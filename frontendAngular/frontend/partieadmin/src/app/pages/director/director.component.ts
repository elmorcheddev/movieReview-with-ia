import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Director } from 'src/app/monClasses/director';
import { DirectorService } from 'src/app/monServices/director.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent {


  listDirec: Director[];
  imgActeur: any;
  director: Director = {
    id: 0,
    image: '',
    name: '',
    nationality: '',
    birthdate: ''
  };
  imgDir: any;
  ngOnInit(): void {
    this.getlistDirec()
  }
  constructor(private direcService: DirectorService) {

  }
  public adddirec(form: NgForm) {
    const formData = new FormData()
    formData.append("image" , this.imgDir)
    formData.append("director" , new Blob([JSON.stringify(this.director)], { type: 'application/json' }));
    this.direcService.saveDirec(formData).subscribe((data: Director) => {
      console.log(data)
      if (data !== null) {
        this.getlistDirec()
        form.resetForm()
      }
    })
  }
  public getlistDirec() {
    this.direcService.listDirec().subscribe((data: Director[]) => {
      this.listDirec = data
    })
  }
  delete(id: number) {
    this.direcService.deleteDirecById(id).subscribe((data: Director) => {
      if (data == null) {
        window.alert("Acteur a ete supprimer !!")
        this.getlistDirec()
      }
    })
  }
  edit(id: number) {
    this.direcService.direcById(id).subscribe((data: Director) => {
      this.director = data
    })
  }

  getFile(event: any) {
    this.imgDir = event.target.files[0]
    console.log(event.target.files[0])
  }
}
