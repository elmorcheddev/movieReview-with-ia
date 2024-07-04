package com.review.services.impl;

import java.util.List;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.review.model.Genre;
import com.review.repository.GenreRepository;
import com.review.services.GenreServices;

 @Service
public class GenreServicesImpl implements GenreServices   {

	private GenreRepository genreRepository;
	
	public GenreServicesImpl(GenreRepository genreRepository) {
 		this.genreRepository = genreRepository;
	}

	@Override
	public List<Genre> listGenres() {
		// TODO Auto-generated method stub
		return genreRepository.findAll();
	}

	@Override
	public Genre addNewGenre(Genre genre) {
 		try {
			if(StringUtils.hasLength(genre.getNomGenere())
					&& genreRepository.findByNomGenere(genre.getNomGenere())==null) {
				return genreRepository.save(genre);

			}else {
				return null;
			}
         }  catch (Exception e) {
            e.printStackTrace();
            return null;
         }	
		}

	@Override
	public Genre findGenreById(Long id) {
		// TODO Auto-generated method stub
		return genreRepository.findById(id).get();
	}

	@Override
	public void deleteGenre(Long id) {
		// TODO Auto-generated method stub
		genreRepository.deleteById(id);
	}
	 
}
