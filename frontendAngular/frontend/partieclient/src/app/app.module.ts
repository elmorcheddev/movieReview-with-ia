import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { FormsModule } from '@angular/forms';
import { FilmDetailsComponent } from './pages/film-details/film-details.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ClandrierComponent } from './pages/clandrier/clandrier.component';
import { AllmoviesComponent } from './pages/allmovies/allmovies.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.intercepter';
import { ClientService } from './monServices/client.service';
import { MonProfilsComponent } from './pages/mon-profils/mon-profils.component';
import { BycatComponent } from './pages/bycat/bycat.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    FilmDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ClandrierComponent,
    AllmoviesComponent,
    AboutComponent,
    FooterComponent,
    MonProfilsComponent,
    BycatComponent,
     
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    AppRoutingModule , 
  ],
  providers: [  AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true 
    
  },
  ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
