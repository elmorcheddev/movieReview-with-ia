package com.review.validation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.util.StringUtils;

 import com.review.model.Director;

public class DirectorValidation {
	public static List<String> VALIDATEUR(Director director){
		List<String> errer= new ArrayList<>();
		 
		
		if(!StringUtils.hasLength(director.getName())) {
			errer.add("enter acteur name ");
 		}
		if(!StringUtils.hasLength(director.getNationality())) {
			errer.add("enter acteur Nationalty ");
 		}
		 
		return errer;
	}
}
