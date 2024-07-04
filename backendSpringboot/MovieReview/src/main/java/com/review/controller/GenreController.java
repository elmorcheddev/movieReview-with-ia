package com.review.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.review.model.Genre;
import com.review.services.GenreServices;

@RestController
@RequestMapping(value = "/genre")
@CrossOrigin
public class GenreController {
	
	private GenreServices genreServices;

	public GenreController(GenreServices genreServices) {
 		this.genreServices = genreServices;
	}
	
	@PostMapping(value = "/add")
	public Genre addnewGenre(@RequestBody Genre genre) {
		return genreServices.addNewGenre(genre);
	}
	
	
	@DeleteMapping(value = "/delete/{id}")
	public void deleteGenre(@PathVariable Long id) {
		 genreServices.deleteGenre(id);
	}
	@GetMapping(value = "/allForClient")
	public List<Genre> listGenresForClient(){
		return genreServices.listGenres();
	}
	@GetMapping(value = "/findbyIdForClient/{id}")
	public Genre findByIdForClient(@PathVariable Long id) {
		return genreServices.findGenreById(id);
	}	
	@GetMapping(value = "/all")
	public List<Genre> listGenres(){
		return genreServices.listGenres();
	}
	@GetMapping(value = "/findbyId/{id}")
	public Genre findById(@PathVariable Long id) {
		return genreServices.findGenreById(id);
	}
}
