package com.review.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.review.model.Acteur;

public interface ActeurRepository  extends JpaRepository<Acteur, Long>{
	
}
