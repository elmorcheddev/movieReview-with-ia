package com.review.repository;

import org.springframework.data.jpa.repository.JpaRepository;

 import com.review.model.Films;
import com.review.model.Genre;

import java.util.List;


public interface FilmsRepository  extends JpaRepository<Films, Long> {
	  List<Films> findByGenre(Genre genre);	
}
