package com.review.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.review.Utils.JwtUtils;
import com.review.model.Utilisateurs;
import com.review.services.UtilisateursServices;

 

@RestController
@RequestMapping(value = "/utilisateur")
 public class UtilisateurController {
 
	private UtilisateursServices utilisateurService;
 
 	public UtilisateurController(UtilisateursServices utilisateurService) {
 		this.utilisateurService = utilisateurService;
	}
	 
 
	@GetMapping(value = "/all")
	public List<Utilisateurs> list(){
		return utilisateurService.listUtilisateurs();
	}
	@PostMapping(value = "/saveAdmin")
	public Utilisateurs registerAdmin(@RequestBody Utilisateurs utilisateurs) {
		return utilisateurService.addNewADMIN(utilisateurs);
	}
	@PostMapping(value = "/saveClient")
	public Utilisateurs registerClient(@RequestBody Utilisateurs utilisateurs) {
		return utilisateurService.addNewUtilisateur(utilisateurs);
	}
	 
	@PutMapping(value = "/updateUtilisateur")
	public Utilisateurs updateUtilisateur(@RequestBody Utilisateurs utilisateurs) {
		return utilisateurService.updateUtilisateur(utilisateurs);
	}
	@GetMapping(value = "/byId/{id}")
	public Utilisateurs  findByUtilisateur(@PathVariable Long id){
		return utilisateurService.findBYiDUtilisateurs(id);
	}
	@GetMapping(value = "/activedesactive/{id}")
	public Utilisateurs  activedesactive(@PathVariable Long id){
		return utilisateurService.activeDesactive(id);
	}
	  
}
