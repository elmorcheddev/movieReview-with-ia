package com.review.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

 import com.review.model.RoleUtilisateur;
import com.review.model.Utilisateurs;
 

public interface UtilisateursRepository extends JpaRepository<Utilisateurs, Long> {
 	boolean existsByRolesContains(Set<RoleUtilisateur> singleton);
 	boolean existsByUsername(String username);

	Utilisateurs findByUsername(String username);

}
