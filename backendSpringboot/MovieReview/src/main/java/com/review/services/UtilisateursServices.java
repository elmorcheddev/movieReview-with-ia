package com.review.services;

import java.util.List;

import com.review.model.Utilisateurs;
import com.review.model.Utilisateurs;

public interface UtilisateursServices {
List<Utilisateurs> listUtilisateurs();
	
	Utilisateurs addNewUtilisateur(Utilisateurs utilisateurs);
	
	Utilisateurs findBYiDUtilisateurs(Long id);
	
	void deleteByIdUtilisateur(Long id);
	Utilisateurs findByUsername(String username);

 
	Utilisateurs addNewADMIN(Utilisateurs utilisateurs);
 	Utilisateurs updateUtilisateur(Utilisateurs utilisateurs);
 	Utilisateurs activeDesactive (Long id);
 	
}
