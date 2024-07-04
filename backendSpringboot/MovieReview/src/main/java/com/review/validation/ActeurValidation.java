package com.review.validation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.util.StringUtils;

import com.review.model.Acteur;

public class ActeurValidation {
	
	public static List<String> VALIDATEUR(Acteur acteur){
		List<String> errer= new ArrayList<>();
		 
		
		if(!StringUtils.hasLength(acteur.getName())) {
			errer.add("enter acteur name ");
 		}
		if(!StringUtils.hasLength(acteur.getNationality())) {
			errer.add("enter acteur Nationalty ");
 		}
		 
		return errer;
	}
}
