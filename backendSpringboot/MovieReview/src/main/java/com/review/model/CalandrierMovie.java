package com.review.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;

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
public class CalandrierMovie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

	private Date showDate;
	private int number;
	@ManyToOne
	@JoinColumn(name = "idfilm")
 
	private Films films;
}
