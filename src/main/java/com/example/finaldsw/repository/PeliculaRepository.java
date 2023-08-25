package com.example.finaldsw.repository;

import com.example.finaldsw.entidad.Pelicula;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "peliculas", path = "peliculas")
public interface PeliculaRepository extends CrudRepository<Pelicula, Long> {
}
