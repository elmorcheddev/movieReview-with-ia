package com.review.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.review.model.Acteur;
import com.review.model.CalandrierMovie;
import com.review.model.Commentaire;
import com.review.model.Director;
import com.review.model.Films;
import com.review.model.Genre;
import com.review.model.Reservation;
import com.review.repository.ActeurRepository;
import com.review.repository.CalandrierMovieRepo;
import com.review.repository.CommentaireRepository;
import com.review.repository.DirectorRepository;
import com.review.repository.FilmsRepository;
import com.review.repository.GenreRepository;
import com.review.repository.ReservationRepo;
import com.review.services.FilmsServices;
@Service
public class FilmsServicesImpl implements FilmsServices   {

	private FilmsRepository filmsRepository;
	private GenreRepository genreRepository;
	private DirectorRepository directorRepository;
	private ActeurRepository acteurRepository;
	private CommentaireRepository commentaireRepository;
	private CalandrierMovieRepo calandrierMovieRepo;
	private ReservationRepo reservationRepo;
	public FilmsServicesImpl(FilmsRepository filmsRepository, CalandrierMovieRepo calandrierMovieRepo
			,ReservationRepo reservationRepo	,CommentaireRepository commentaireRepository, GenreRepository genreRepository,
			DirectorRepository directorRepository, ActeurRepository acteurRepository) {
 		this.filmsRepository = filmsRepository;
 		this.commentaireRepository=commentaireRepository;
		this.genreRepository = genreRepository;
		this.directorRepository = directorRepository;
		this.acteurRepository = acteurRepository;
		this.calandrierMovieRepo=calandrierMovieRepo;
		this.reservationRepo=reservationRepo;
	}

	@Override
	public List<Films> listFilmss() {
		// TODO Auto-generated method stub
		return filmsRepository.findAll();
	}

	@Override
	public Films addNewFilms(Films films) {
		Acteur acteur = acteurRepository.findById(films.getActeur().getId()).get();
		Director director = directorRepository.findById(films.getDirector().getId()).get();
		Genre genre = genreRepository.findById(films.getGenre().getId()).get();
		films.setActeur(acteur);
		films.setDirector(director);
		films.setGenre(genre);
		films.setDescription(films.getDescription());
		films.setImageBase(films.getImageBase());
		films.setImageCov(films.getImageCov());
		films.setTitle(films.getTitle());
		films.setReleaseDate(films.getReleaseDate());
		return filmsRepository.save(films);
	}

	@Override
	public Films findFilmsById(Long id) {
		// TODO Auto-generated method stub
		return filmsRepository.findById(id).get();
	}

	@Override
	public void deleteFilms(Long id) {
	    // Fetch the film by its ID
	    Optional<Films> filmsOptional = filmsRepository.findById(id);
	    
	    // Check if the film exists
	    if (filmsOptional.isPresent()) {
	        Films films = filmsOptional.get();
	        
	        // Fetch all associated entities
	        List<Commentaire> comm = commentaireRepository.findByFilms(films);
	        List<CalandrierMovie> calandrierMovies = calandrierMovieRepo.findByFilms(films);
	        List<Reservation> reservation = reservationRepo.findByFilms(films);
	        
	        // Delete all associated entities
	        commentaireRepository.deleteAll(comm);
	        calandrierMovieRepo.deleteAll(calandrierMovies);
	        reservationRepo.deleteAll(reservation);
	        
	        // Delete the film itself
	        filmsRepository.deleteById(id);
	    } else {
	       return ; // Film not found, handle appropriately (throw exception or log)
	    }
	}


	@Override
	public List<Films> findByGenre(Genre genre) {
		// TODO Auto-generated method stub
		return filmsRepository.findByGenre(genre);
	}
	 
}
