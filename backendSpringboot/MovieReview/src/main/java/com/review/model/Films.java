package com.review.model;

import java.util.Date;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Films {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
	 @Lob
	 @Column(name = "imageBase", columnDefinition="LONGBLOB")
	 	private byte[] imageBase;
private String imgFim;
@Lob
@Column(name = "imageCov", columnDefinition="LONGBLOB")
	private byte[] imageCov;
private String title;                    
private String description;             
private  Date releaseDate;
private int duree;
@ManyToOne 
@JoinColumn( name = "idGenre")
private Genre genre;
@ManyToOne
@JoinColumn( name = "idDirector")
private Director director;
@ManyToOne
@JoinColumn( name = "idActeur")
 private  Acteur acteur;
 

}
