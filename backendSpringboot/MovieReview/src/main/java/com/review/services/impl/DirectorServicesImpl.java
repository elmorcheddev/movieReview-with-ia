package com.review.services.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.review.model.Director;
import com.review.repository.DirectorRepository;
import com.review.services.DirectorServices;
@Service
public class DirectorServicesImpl implements DirectorServices  {

	private DirectorRepository directorRepository;	
	
	public DirectorServicesImpl(DirectorRepository directorRepository) {
 		this.directorRepository = directorRepository;
	}

	@Override
	public List<Director> listDirectors() {
		// TODO Auto-generated method stub
		return directorRepository.findAll();
	}

	@Override
	public Director addNewDirector(Director director) {
		director.setBirthdate(director.getBirthdate());
		director.setImage(director.getImage());
		director.setName(director.getName());
		director.setNationality(director.getNationality());
		return directorRepository.save(director);
	}

	@Override
	public Director findDirectorById(Long id) {
		// TODO Auto-generated method stub
		return directorRepository.findById(id).get();
	}

	@Override
	public void deleteDirector(Long id) {
		// TODO Auto-generated method stub
		directorRepository.deleteById(id);
	}
	 
}
