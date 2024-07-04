package com.review.services;

import java.util.List;

import com.review.model.CalandrierMovie;
import com.review.model.Films;

 
public interface CalandrierMovieServices {
	List<CalandrierMovie> listCalandrierMovie();
	CalandrierMovie addNewCalandrierMovie(CalandrierMovie calandrierMovie);
	CalandrierMovie findCalandrierMovieById(Long id);
	 void deleteCalandrierMovie(Long id);
	 List<CalandrierMovie> findByFilms(Films films);

}
