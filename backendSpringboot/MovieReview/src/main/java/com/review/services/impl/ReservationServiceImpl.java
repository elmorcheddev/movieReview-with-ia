package com.review.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.review.model.Reservation;
import com.review.model.Films;
import com.review.model.Utilisateurs;
 import com.review.repository.FilmsRepository;
import com.review.repository.ReservationRepo;
import com.review.repository.UtilisateursRepository;
 import com.review.services.ReservationService;
@Service
public class ReservationServiceImpl  implements ReservationService {
		@Autowired
		private ReservationRepo reservationRepo;
		@Autowired
		private UtilisateursRepository utilisateursRepository;
		@Autowired
		private FilmsRepository filmsRepository;
	@Override
	public List<Reservation> listReservation() {
		// TODO Auto-generated method stub
		return reservationRepo.findAll();
	}

	@Override
	public Reservation addNewReservation(Reservation reservation , Long userId , Long idFilm) {
 		
	     Utilisateurs utilisateurs= utilisateursRepository.findById(userId).get();
	     reservation.setUtilisateurs(utilisateurs);
		Films films = filmsRepository.findById(idFilm).get();
		reservation.setFilms(films);
		boolean exist = reservationRepo.existsByFilmsAndUtilisateursAndDate(films, utilisateurs, reservation.getDate());
		if(!exist) {
			  		return reservationRepo.save(reservation);

		}else {
			return null;
		}
	}

	@Override
	public Reservation findReservationById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteReservation(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Reservation> findByFilms(Films films) {
		// TODO Auto-generated method stub
		return reservationRepo.findByFilms(films);
	}

	@Override
	public List<Reservation> findByUtilisateurs(Utilisateurs utilisateurs) {
		// TODO Auto-generated method stub
		return reservationRepo.findByUtilisateurs(utilisateurs);
	}

 
	 
}
