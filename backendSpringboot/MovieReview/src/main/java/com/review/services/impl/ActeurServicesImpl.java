package com.review.services.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.review.model.Acteur;
import com.review.repository.ActeurRepository;
import com.review.services.ActeurServices;
import com.review.validation.ActeurValidation;

@Service 
public class ActeurServicesImpl   implements  ActeurServices{
	
	private ActeurRepository acteurRepository;
	
	public ActeurServicesImpl(ActeurRepository acteurRepository) {
		super();
		this.acteurRepository = acteurRepository;
	}

	@Override
	public List<Acteur> listActeurs() {
		return acteurRepository.findAll();
	}

	@Override
	public Acteur addNewActeur(Acteur acteur) {
		List<String> error = ActeurValidation.VALIDATEUR(acteur);
		if(error.isEmpty()) {
			acteur.setBirthdate(acteur.getBirthdate());
			acteur.setImage(acteur.getImage());
			acteur.setName(acteur.getName());
			acteur.setNationality(acteur.getNationality());
			return acteurRepository.save(acteur);
		}else {
			return null;
		}
 	}

	@Override
	public Acteur findActeurById(Long id) {
			return acteurRepository.findById(id).get();
	}

	@Override
	public void deleteActeur(Long id) {
	 acteurRepository.deleteById(id);
	}
	 
}
