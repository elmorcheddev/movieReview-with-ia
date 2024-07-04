package com.review.services;

import java.util.List;

import com.review.model.Genre;
import com.review.model.Genre;

public interface GenreServices {
	List<Genre> listGenres();
	 Genre addNewGenre(Genre genre);
	 Genre findGenreById(Long id);
	 void deleteGenre(Long id);
}
