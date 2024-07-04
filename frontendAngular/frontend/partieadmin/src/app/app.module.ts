import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { GenreComponent } from './pages/genre/genre.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FilmsComponent } from './pages/films/films.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { DirectorComponent } from './pages/director/director.component';
import { ActeurComponent } from './pages/acteur/acteur.component';
import { CinemaComponent } from './pages/cinema/cinema.component';
import { ReviewComponent } from './pages/review/review.component';
import { FormsModule } from '@angular/forms';
import { CalandComponent } from './pages/caland/caland.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.intercepter';
import { AdminService } from './monServices/admin.service';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    GenreComponent,
    FilmsComponent,
    UtilisateurComponent,
    DirectorComponent,
    ActeurComponent,
    CinemaComponent,
    ReviewComponent,
    CalandComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [  AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true 
    
  },
  AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
