package com.review.services;

import java.util.List;

import com.review.model.Director;
import com.review.model.Director;

public interface DirectorServices {
	List<Director> listDirectors();
	 Director addNewDirector(Director director);
	 Director findDirectorById(Long id);
	 void deleteDirector(Long id);
}
