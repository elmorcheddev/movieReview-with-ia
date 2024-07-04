package com.review.services.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.review.model.CalandrierMovie;
import com.review.model.Films;
import com.review.repository.CalandrierMovieRepo;
import com.review.repository.FilmsRepository;
import com.review.services.CalandrierMovieServices;
@Service
public class CalandrierMovieServicesImpl  implements CalandrierMovieServices{
@Autowired
private CalandrierMovieRepo calandrierMovieRepo;
@Autowired
private FilmsRepository filmsRepository;
	@Override
	public List<CalandrierMovie> listCalandrierMovie() {
		return calandrierMovieRepo.findAll();
	}
	 
	@Override
	public CalandrierMovie addNewCalandrierMovie(CalandrierMovie calandrierMovie) {
		Date date = new Date();
		Films films= filmsRepository.findById(calandrierMovie.getFilms().getId()).get();
		int numberplace =0;
	  if(calandrierMovie.getShowDate().after(date) && calandrierMovieRepo.findByShowDate(calandrierMovie.getShowDate())== null){
			calandrierMovie.setFilms(films);
			calandrierMovie.setShowDate(calandrierMovie.getShowDate());
			CalandrierMovie cal=  calandrierMovieRepo.save(calandrierMovie);
			cal.setNumber(numberplace+1);
			return calandrierMovieRepo.save(cal);

		}else {
			return null;
		}
		
		
	}

	@Override
	public CalandrierMovie findCalandrierMovieById(Long id) {
		return calandrierMovieRepo.findById(id).get();
	}

	@Override
	public void deleteCalandrierMovie(Long id) {
		calandrierMovieRepo.deleteById(id);
	}

	@Override
	public List<CalandrierMovie> findByFilms(Films films) {
		return calandrierMovieRepo.findByFilms(films);
	}

}
