package com.review.controller;

import com.review.model.Commentaire;
import com.review.model.Films;
import com.review.model.Utilisateurs;
import com.review.services.CommentaireServices;
import com.review.services.FilmsServices;
 import com.review.services.UtilisateursServices;
import com.review.services.impl.SentimentAnalysisService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(value = "/api/comm")
@CrossOrigin
public class CommentaireController {

    @Autowired
    private CommentaireServices commentaireServices;

    @Autowired
    private FilmsServices filmsServices;

    @Autowired
    private UtilisateursServices utilisateursServices;

    @Autowired
    private  SentimentAnalysisService sentimentAnalysisService;

    @PostMapping("/savecomm")
    public ResponseEntity<Commentaire> addNewCommentaire(@RequestPart("comm") Commentaire commentaire,
                                                         @RequestParam Long userId,
                                                         @RequestParam Long idFilm) throws IOException {

        // Analyze sentiment
        String sentiment = sentimentAnalysisService.analyzeSentiment(commentaire.getCommentaire());
        commentaire.setSentiment(sentiment);

        // Save the comment
        Commentaire savedCommentaire = commentaireServices.addNewCommentaire(commentaire, userId, idFilm);

        return new ResponseEntity<>(savedCommentaire, HttpStatus.OK);
    }

    @GetMapping(value = "/commByFilms/{id}")
    public List<Commentaire> findByFilms(@PathVariable Long id) {
        Films films = filmsServices.findFilmsById(id);
        return commentaireServices.findByFilms(films);
    }
    @GetMapping(value = "/all")
public List<Commentaire> findAll(){
	return commentaireServices.listCommentaire();
}
    @GetMapping(value = "/byUtilisateur/{id}")
    public List<Commentaire> findByUtilisateurs(@PathVariable("id") Long Id) {
        Utilisateurs utilisateurs = utilisateursServices.findBYiDUtilisateurs(Id);
        return commentaireServices.findByUtilisateurs(utilisateurs);
    }
    @GetMapping("/happy/{filmId}")
    public Double getAverageHappySentimentByFilmId(@PathVariable Long filmId) {
        return commentaireServices.calculateAverageSentimentByFilmId(filmId);
    }
    @GetMapping("/sad/{filmId}")
    public Double getAverageSadSentimentByFilmId(@PathVariable Long filmId) {
        return commentaireServices.calculateAverageSaDSentimentByFilmId(filmId);
    }
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
         commentaireServices.deleteComm(id);
    }
}
