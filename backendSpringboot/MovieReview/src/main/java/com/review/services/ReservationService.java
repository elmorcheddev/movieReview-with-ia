package com.review.services;

import com.review.model.Films;
import com.review.model.Reservation;
import com.review.model.Utilisateurs;

import java.util.List;

public interface ReservationService {

	List<Reservation> listReservation();

	Reservation addNewReservation(Reservation reservation, Long userId, Long idFilm);

	Reservation findReservationById(Long id);

	void deleteReservation(Long id);

	List<Reservation> findByFilms(Films films);
	List<Reservation> findByUtilisateurs(Utilisateurs utilisateurs);

}
