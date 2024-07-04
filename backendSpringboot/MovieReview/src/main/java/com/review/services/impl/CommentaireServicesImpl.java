package com.review.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.review.model.Commentaire;
import com.review.model.Films;
import com.review.model.Utilisateurs;
import com.review.repository.CommentaireRepository;
import com.review.repository.FilmsRepository;
import com.review.repository.UtilisateursRepository;
import com.review.services.CommentaireServices;
@Service
public class CommentaireServicesImpl  implements CommentaireServices {
		@Autowired
		private CommentaireRepository commentaireRepository;
		@Autowired
		private UtilisateursRepository utilisateursRepository;
		@Autowired
		private FilmsRepository filmsRepository;
	@Override
	public List<Commentaire> listCommentaire() {
		// TODO Auto-generated method stub
		return commentaireRepository.findAll();
	}
	@Override
	 public Double calculateAverageSentimentByFilmId(Long filmId) {
	        return commentaireRepository.calculatePercentageOfHappySentimentByFilmId(filmId);
	    }
	@Override
	 public Double calculateAverageSaDSentimentByFilmId(Long filmId) {
	        return commentaireRepository.calculatePercentageOfSadSentimentByFilmId(filmId);
	    }
	@Override
	public Commentaire addNewCommentaire(Commentaire commentaire , Long userId , Long idFilm) {
 		
	     Utilisateurs utilisateurs= utilisateursRepository.findById(userId).get();
	     commentaire.setUtilisateurs(utilisateurs);
		Films films = filmsRepository.findById(idFilm).get();
		commentaire.setFilms(films);
     	commentaire.setCommentaire(commentaire.getCommentaire());
 		return commentaireRepository.save(commentaire);
	}

	@Override
	public Commentaire findCommentaireById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteCommentaire(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Commentaire> findByFilms(Films films) {
		// TODO Auto-generated method stub
		return commentaireRepository.findByFilms(films);
	}

	@Override
	public List<Commentaire> findByUtilisateurs(Utilisateurs utilisateurs) {
		// TODO Auto-generated method stub
		return commentaireRepository.findByUtilisateurs(utilisateurs);
	}
	@Override
	public void deleteComm(Long id) {
		// TODO Auto-generated method stub
		commentaireRepository.deleteById(id);
	}
	 
}
