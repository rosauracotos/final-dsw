package com.example.finaldsw.repository;

import com.example.finaldsw.entidad.Boleto;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "boletos", path = "boletos")
public interface BoletoRepository extends CrudRepository<Boleto, Long> {
}
