package com.review.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.review.model.Acteur;
import com.review.services.ActeurServices;

@RestController
@RequestMapping(value = "/acteur")
@CrossOrigin
public class ActeurController {
	 
	private ActeurServices acteurServices;
	
	public ActeurController(ActeurServices acteurServices) {
 		this.acteurServices = acteurServices;
	}

@PostMapping(value = "/add")
public Acteur saveNewActeur(@RequestPart("image" ) MultipartFile image , 
								@RequestPart("acteur")	Acteur acteur) {
	try {
		acteur.setImage(image.getBytes());
		return acteurServices.addNewActeur(acteur);

	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
		return null;
	}
	
}
@GetMapping(value = "/all")
public List<Acteur> listActeurs(){
	return acteurServices.listActeurs();
}
@GetMapping(value = "/byId/{id}")
public Acteur findById(@PathVariable Long id) {
	return acteurServices.findActeurById(id);
}
@GetMapping(value = "/allForClient")
public List<Acteur> listActeursForClient(){
	return acteurServices.listActeurs();
}
@GetMapping(value = "/byIdForClient/{id}")
public Acteur findByIdForClient(@PathVariable Long id) {
	return acteurServices.findActeurById(id);
}
@GetMapping(value = "/delete/{id}")
public void deletebyId(@PathVariable Long id) {
	 acteurServices.deleteActeur(id);
	 
}
}
