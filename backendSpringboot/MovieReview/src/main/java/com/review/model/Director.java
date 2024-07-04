package com.review.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Director {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
	 @Lob
	 @Column(name = "image", columnDefinition="LONGBLOB")
	 	private byte[] image;
	private String name;
	private String nationality;
	private Date birthdate;
}
