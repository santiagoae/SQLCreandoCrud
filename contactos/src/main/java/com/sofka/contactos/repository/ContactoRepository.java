package com.sofka.contactos.repository;

import com.sofka.contactos.domain.Contacto;
import org.springframework.data.repository.CrudRepository;

public interface ContactoRepository extends CrudRepository<Contacto, Integer> {
}