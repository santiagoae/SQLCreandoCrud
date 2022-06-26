package com.sofka.contactos.repository;

import com.sofka.contactos.domain.Telefono;
import org.springframework.data.repository.CrudRepository;

public interface TelefonoRepository extends CrudRepository<Telefono, Integer> {
}