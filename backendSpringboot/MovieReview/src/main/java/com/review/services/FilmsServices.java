package com.review.services;

import java.util.List;

import com.review.model.Films;
import com.review.model.Genre;
import com.review.model.Films;

public interface FilmsServices {
	List<Films> listFilmss();
	 Films addNewFilms(Films films);
	 Films findFilmsById(Long id);
	 void deleteFilms(Long id);
	 List<Films> findByGenre(Genre genre);	 

}
