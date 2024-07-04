package com.review.controller;
 
import com.review.model.Commentaire;
import com.review.model.Reservation;
import com.review.model.Utilisateurs;
import com.review.services.ReservationService;
import com.review.services.UtilisateursServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;
    @Autowired
    private UtilisateursServices utilisateursServices;
    @PostMapping("/saveRes")
        public Reservation addNewCommentaire(@RequestPart("res") Reservation reservation,
                                                             @RequestParam Long userId,
                                                             @RequestParam Long idFilm) throws IOException {

          return reservation = reservationService.addNewReservation(reservation, userId, idFilm);

              
        }
    @GetMapping(value = "/byclient/{id}")
    public List<Reservation>listByClinet(@PathVariable Long id ){
    	Utilisateurs utilisateurs= utilisateursServices.findBYiDUtilisateurs(id);
    	return reservationService.findByUtilisateurs(utilisateurs);
    }
}
