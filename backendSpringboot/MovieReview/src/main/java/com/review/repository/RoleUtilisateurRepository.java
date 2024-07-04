package com.review.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.review.model.RoleUtilisateur;

public interface RoleUtilisateurRepository  extends JpaRepository<RoleUtilisateur, Long>{
	 
}
