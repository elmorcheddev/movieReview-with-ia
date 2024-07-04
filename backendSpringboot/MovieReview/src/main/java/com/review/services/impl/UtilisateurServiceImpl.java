package com.review.services.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.management.relation.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.review.model.RoleUtilisateur;
import com.review.model.Utilisateurs;
import com.review.repository.RolesRepo;
import com.review.repository.UtilisateursRepository;
import com.review.services.UtilisateursServices;
 
@Service
public class UtilisateurServiceImpl implements UtilisateursServices {

	@Autowired
	private UtilisateursRepository utilisateurRepo;
	@Autowired
	private RolesRepo rolesRepo;
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	 

	@Override
	public List<Utilisateurs> listUtilisateurs() {
		// TODO Auto-generated method stub
		return utilisateurRepo.findAll();
	}

	@Override
	public Utilisateurs addNewUtilisateur(Utilisateurs utilisateurs) {
 		RoleUtilisateur roles=rolesRepo.findByNomroleUtilisateur("USER");
 		boolean exist =utilisateurRepo.existsByUsername(utilisateurs.getUsername());
		Set<RoleUtilisateur> listRoles= new HashSet<>();
		listRoles.add(roles);
		if(!exist) {
			utilisateurs.setRoles(listRoles);
	        utilisateurs.setPassword(passwordEncoder.encode(utilisateurs.getPassword()));
	        utilisateurs.setNom(utilisateurs.getNom());
	        utilisateurs.setPrenom(utilisateurs.getPrenom());
 	        utilisateurs.setUsername(utilisateurs.getUsername());
	 		return utilisateurRepo.save(utilisateurs);

		}else {
 			return null;
		}
	}
	@Override
	public Utilisateurs updateUtilisateur(Utilisateurs utilisateurs) {
 		RoleUtilisateur roles=rolesRepo.findByNomroleUtilisateur("USER");
		Set<RoleUtilisateur> listRoles= new HashSet<>();
		listRoles.add(roles);
 			utilisateurs.setRoles(listRoles);
	        utilisateurs.setPassword(passwordEncoder.encode(utilisateurs.getPassword()));
	        utilisateurs.setNom(utilisateurs.getNom());
	        utilisateurs.setPrenom(utilisateurs.getPrenom());
  	        utilisateurs.setUsername(utilisateurs.getUsername());
	 		return utilisateurRepo.save(utilisateurs);

		  
	}

	@Override
	public Utilisateurs addNewADMIN(Utilisateurs utilisateurs) {
 
	    boolean adminbyRolesExists = utilisateurRepo.existsByRolesContains(Collections.singleton(rolesRepo.findByNomroleUtilisateur("ADMIN")));
	    boolean adminbyUserNameExists = utilisateurRepo.existsByUsername(utilisateurs.getUsername());

	    if ( !adminbyRolesExists && !adminbyUserNameExists) {
	        RoleUtilisateur adminRole = rolesRepo.findByNomroleUtilisateur("ADMIN");
	        Set<RoleUtilisateur> roles = new HashSet<>();
	        roles.add(adminRole);
	        utilisateurs.setPassword(passwordEncoder.encode(utilisateurs.getPassword()));
	        utilisateurs.setRoles(roles);
	        return utilisateurRepo.save(utilisateurs);
	    } else {
	        System.out.println("An admin user already exists, or validation errors occurred.");
	        return null;
	    }
	}
 
	@Override
	public Utilisateurs findBYiDUtilisateurs(Long id) {
		return utilisateurRepo.findById(id).get();
	}

	@Override
	public void deleteByIdUtilisateur(Long id) {
		utilisateurRepo.deleteById(id);
	}

	@Override
	public Utilisateurs findByUsername(String username) {
		// TODO Auto-generated method stub
		return  utilisateurRepo.findByUsername(username);
	}

	@Override
	public Utilisateurs activeDesactive(Long id) {
Utilisateurs utilisateurs =utilisateurRepo.findById(id).get();
if (utilisateurs.isEtat()== true) {
	utilisateurs.setEtat(false);
	return utilisateurRepo.save(utilisateurs);
}else {
	utilisateurs.setEtat(true);
	return utilisateurRepo.save(utilisateurs);

}
	}

	 
	 
 

}
