package com.review.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.review.model.RoleUtilisateur;

 
 
public interface RolesRepo extends JpaRepository<RoleUtilisateur, Long> {
	 RoleUtilisateur findByNomroleUtilisateur(String nomroleUtilisateur); 
}
