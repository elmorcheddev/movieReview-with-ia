package com.review.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.review.model.Commentaire;
import com.review.model.Films;
import com.review.model.Utilisateurs;

import java.util.List;

 

 
public interface CommentaireRepository  extends JpaRepository<Commentaire, Long>{
List<Commentaire> findByFilms(Films films);
List<Commentaire> findByUtilisateurs(Utilisateurs utilisateurs);
@Query("SELECT (COUNT(CASE WHEN r.sentiment = 'happy' THEN 1 END) * 100.0) / COUNT(r) " +
	       "FROM Commentaire r WHERE r.films.id = :filmId")
	Double calculatePercentageOfHappySentimentByFilmId(@Param("filmId") Long filmId);
 @Query("SELECT (COUNT(CASE WHEN r.sentiment = 'sad' THEN 0 END) * 100.0) / COUNT(r) " +
	       "FROM Commentaire r WHERE r.films.id = :filmId")
	Double calculatePercentageOfSadSentimentByFilmId(@Param("filmId") Long filmId);


}
