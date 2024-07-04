package com.review.model;


import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Reservation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
 
 
		private Date date;
	 @ManyToOne
		@JoinColumn(name = "idfilm")
		private Films films;
	@ManyToOne
	@JoinColumn(name = "idUtilisateur")
	private Utilisateurs utilisateurs;
}
