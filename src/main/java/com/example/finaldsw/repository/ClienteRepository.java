package com.example.finaldsw.repository;

import com.example.finaldsw.entidad.Cliente;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "clientes", path = "clientes")
public interface ClienteRepository extends CrudRepository<Cliente, Long> {
}
