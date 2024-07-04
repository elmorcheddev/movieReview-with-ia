package com.review.controller;

import java.io.IOException;
import java.util.List;

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
import com.review.model.Director;
import com.review.services.DirectorServices;

@RestController
@RequestMapping(value = "/director")
@CrossOrigin
public class DirectorController {
	 
	private DirectorServices directorServices;
	
	public DirectorController(DirectorServices directorServices) {
 		this.directorServices = directorServices;
	}
 
@PostMapping(value = "/add")
public Director saveNewDirector(@RequestPart("image" ) MultipartFile image , 
		@RequestPart("director")	Director director) {
	try {
		director.setImage(image.getBytes());
		return directorServices.addNewDirector(director);

	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
		return null;
	}
	
}
@GetMapping(value = "/allForClient")
public List<Director> listDirectorsForClient(){
	return directorServices.listDirectors();
}
@GetMapping(value = "/byIdForClient/{id}")
public Director findByIdForClient(@PathVariable Long id) {
	return directorServices.findDirectorById(id);
}
@GetMapping(value = "/delete/{id}")
public void deletebyId(@PathVariable Long id) {
	 directorServices.deleteDirector(id);
	 
}
@GetMapping(value = "/all")
public List<Director> listDirectors(){
	return directorServices.listDirectors();
}
@GetMapping(value = "/byId/{id}")
public Director findById(@PathVariable Long id) {
	return directorServices.findDirectorById(id);
}
 
}
