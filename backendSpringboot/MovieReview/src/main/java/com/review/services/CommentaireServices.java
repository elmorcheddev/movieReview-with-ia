package com.review.services;

import java.util.List;

import com.review.model.Commentaire;
import com.review.model.Films;
import com.review.model.Utilisateurs;
import com.review.model.Commentaire;

public interface CommentaireServices {
	List<Commentaire> listCommentaire();
 	 Commentaire findCommentaireById(Long id);
	 void deleteCommentaire(Long id);
	 List<Commentaire> findByFilms(Films films);
 	List<Commentaire> findByUtilisateurs(Utilisateurs utilisateurs);
	Commentaire addNewCommentaire(Commentaire commentaire, Long userId, Long idFilm);
	Double calculateAverageSentimentByFilmId(Long filmId);
	Double calculateAverageSaDSentimentByFilmId(Long filmId);
	void deleteComm(Long id);

}
