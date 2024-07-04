import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { FilmDetailsComponent } from './pages/film-details/film-details.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ClandrierComponent } from './pages/clandrier/clandrier.component';
import { AllmoviesComponent } from './pages/allmovies/allmovies.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthRedirectGuard } from './auth/AuthRedirectGuard ';
import { AuthGuard } from './auth/auth.guard';
import { MonProfilsComponent } from './pages/mon-profils/mon-profils.component';
import { BycatComponent } from './pages/bycat/bycat.component';

const routes: Routes = [
  {path:"home", component:IndexComponent}, 
  {path:"", component:IndexComponent}, 

  {path:"filmDetails" , component:FilmDetailsComponent},
  {path:"filmbycat" , component:BycatComponent},
  {path:"caland" , component:ClandrierComponent},
  {path:"movies" , component:AllmoviesComponent},
  {path:"about" , component:AboutComponent},
  {path:"myProfils" , component:MonProfilsComponent , canActivate: [AuthGuard]},

  {path:"login" , component:LoginComponent , canActivate: [AuthRedirectGuard]},
  {path:"register" , component:RegisterComponent ,canActivate: [AuthRedirectGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
