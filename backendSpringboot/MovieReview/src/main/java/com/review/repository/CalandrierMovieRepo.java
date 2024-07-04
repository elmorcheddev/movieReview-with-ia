package com.review.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.review.model.CalandrierMovie;
import com.review.model.Films;
import java.util.Date;


public interface CalandrierMovieRepo  extends JpaRepository<CalandrierMovie, Long>{
List<CalandrierMovie> findByFilms(Films films);
 CalandrierMovie  findByShowDate(Date showDate);
}
