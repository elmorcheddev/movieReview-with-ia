package com.review.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.review.model.Films;
import com.review.model.Reservation;
import com.review.model.Utilisateurs;
import java.util.Date;


public interface ReservationRepo extends JpaRepository<Reservation, Long>{

	List<Reservation> findByFilms(Films films);
	boolean existsByFilmsAndUtilisateursAndDate(Films films, Utilisateurs utilisateurs, Date date);
	List<Reservation> findByUtilisateurs(Utilisateurs utilisateurs);
}
