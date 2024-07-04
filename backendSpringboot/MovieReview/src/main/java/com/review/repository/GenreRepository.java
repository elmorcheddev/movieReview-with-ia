package com.review.repository;

import org.springframework.data.jpa.repository.JpaRepository;

 import com.review.model.Genre;

public interface GenreRepository  extends JpaRepository<Genre, Long>{
	 Genre  findByNomGenere(String nomGenere);
}
