package com.review.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.review.model.Acteur;
import com.review.model.Films;
import com.review.model.Genre;
import com.review.services.FilmsServices;
import com.review.services.GenreServices;
@RestController
@RequestMapping(value = "/film*")
@CrossOrigin
public class FilmsController {
	@Autowired
	private FilmsServices filmsServices;
	@Autowired
	private GenreServices genreServices;
 
@PostMapping(value = "/save")
public Films addNewFilms(@RequestPart("base")MultipartFile base , @RequestPart("cov") MultipartFile cov , 
		@RequestPart("films") Films films) {
	try {
		films.setImageBase(base.getBytes());
		films.setImageCov(cov.getBytes());
		 return filmsServices.addNewFilms(films);
	} catch (IOException e) {
 		e.printStackTrace();
		return null;
	}
	
}
@GetMapping(value = "/allForClient")
public List<Films> listActeursForClient(){
	return filmsServices.listFilmss();
}
@GetMapping(value = "/byIdForClient/{id}")
public Films findFilmsByIdForClient(@PathVariable Long id) {
	// TODO Auto-generated method stub
	return filmsServices.findFilmsById(id);
}
@GetMapping(value = "/all")
public List<Films> listActeurs(){
	return filmsServices.listFilmss();
}
@GetMapping(value = "/byId/{id}")
public Films findFilmsById(@PathVariable Long id) {
	// TODO Auto-generated method stub
	return filmsServices.findFilmsById(id);
}
@GetMapping(value = "/delete/{id}")
public void delete(@PathVariable Long id) {
	// TODO Auto-generated method stub
	 filmsServices.deleteFilms(id);
}
@GetMapping(value = "/bycat/{id}")
public List<Films> bycat(@PathVariable Long id) {
	Genre genre=genreServices.findGenreById(id);
 	return filmsServices.findByGenre(genre);
}
}
