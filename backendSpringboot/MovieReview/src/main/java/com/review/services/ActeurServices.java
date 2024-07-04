package com.review.services;

import java.util.List;

import com.review.model.Acteur;

public interface ActeurServices {
 List<Acteur> listActeurs();
 Acteur addNewActeur(Acteur acteur);
 Acteur findActeurById(Long id);
 void deleteActeur(Long id);
}
