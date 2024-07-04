import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenreComponent } from './pages/genre/genre.component';
import { IndexComponent } from './pages/index/index.component';
import { ActeurComponent } from './pages/acteur/acteur.component';
import { DirectorComponent } from './pages/director/director.component';
import { FilmsComponent } from './pages/films/films.component';
import { CalandComponent } from './pages/caland/caland.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthRedirectGuard } from './auth/AuthRedirectGuard ';
import { AuthGuard } from './auth/auth.guard';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { ReviewComponent } from './pages/review/review.component';

const routes: Routes = [
  {path:"genre",component:GenreComponent ,canActivate: [AuthGuard]},
  {path:"",component:IndexComponent ,canActivate: [AuthGuard]},
  {path:"index",component:IndexComponent ,canActivate: [AuthGuard]},
  {path:"actors",component:ActeurComponent ,canActivate: [AuthGuard]},
  {path:"directors",component:DirectorComponent ,canActivate: [AuthGuard]},
  {path:"films",component:FilmsComponent ,canActivate: [AuthGuard]},
  {path:"calan",component:CalandComponent ,canActivate: [AuthGuard]},
  {path:"login",component:LoginComponent , canActivate: [AuthRedirectGuard]},
  {path:"listutilisateur",component:UtilisateurComponent , canActivate: [AuthGuard]},
  {path:"review",component:ReviewComponent , canActivate: [AuthGuard]},
  {path:"register",component:RegisterComponent , canActivate: [AuthRedirectGuard]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
