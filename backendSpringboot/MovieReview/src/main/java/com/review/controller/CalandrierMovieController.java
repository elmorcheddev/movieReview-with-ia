package com.review.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.review.model.CalandrierMovie;
import com.review.model.Films;
import com.review.services.CalandrierMovieServices;
import com.review.services.FilmsServices;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin
@RequestMapping(value = "/calandrierMovie")
public class CalandrierMovieController {
@Autowired
private CalandrierMovieServices calandrierMovieServices;
@Autowired
private FilmsServices filmsServices;
@GetMapping(value = "/listForClient")
public List<CalandrierMovie> liCalandrierMoviesForClient(){
	return calandrierMovieServices.listCalandrierMovie();
}
@GetMapping(value = "/byIdForClient/{id}")
public  CalandrierMovie  findByIDCalandrierMoviesForClient(@PathVariable Long id){
	return calandrierMovieServices.findCalandrierMovieById(id);
}
@GetMapping(value = "/filmByCalandForClient/{id}")
public  List<CalandrierMovie>  findByFilmCalandrierMoviesForClient(@PathVariable Long id){
	Films film= filmsServices.findFilmsById(id);
	return calandrierMovieServices.findByFilms(film);
}
@GetMapping(value = "/list")
public List<CalandrierMovie> liCalandrierMovies(){
	return calandrierMovieServices.listCalandrierMovie();
}
@GetMapping(value = "/byId/{id}")
public  CalandrierMovie  findByIDCalandrierMovies(@PathVariable Long id){
	return calandrierMovieServices.findCalandrierMovieById(id);
}
@GetMapping(value = "/filmByCaland/{id}")
public  List<CalandrierMovie>  findByFilmCalandrierMovies(@PathVariable Long id){
	Films film= filmsServices.findFilmsById(id);
	return calandrierMovieServices.findByFilms(film);
}
@PostMapping(value = "/save")
public CalandrierMovie addnewCalandrierMovie(@RequestBody CalandrierMovie calandrierMovie) {
     
    return calandrierMovieServices.addNewCalandrierMovie(calandrierMovie);
}

}
