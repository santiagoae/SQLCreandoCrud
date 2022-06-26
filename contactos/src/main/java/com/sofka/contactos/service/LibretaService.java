package com.sofka.contactos.service;

import com.sofka.contactos.domain.Contacto;
import com.sofka.contactos.domain.Telefono;
import com.sofka.contactos.repository.ContactoRepository;
import com.sofka.contactos.repository.TelefonoRepository;
import com.sofka.contactos.service.interfaces.ILibreta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

@Service
public class LibretaService implements ILibreta {

    @Autowired
    private ContactoRepository contactoRepository;

    @Autowired
    private TelefonoRepository telefonoRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Contacto> getList() {
        return null;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Contacto> getList(String field, Sort.Direction order) {
        return null;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Contacto> searchContacto(String dataToSearch) {
        return null;
    }

    @Override
    @Transactional
    public Contacto createContacto(Contacto contacto) {
        return null;
    }

    @Override
    @Transactional
    public Telefono createTelefono(Telefono telefono) {
        return null;
    }

    @Override
    @Transactional
    public Contacto updateContacto(Integer id, Contacto contacto) {
        return null;
    }

    @Override
    @Transactional
    public Contacto updateNombre(Integer id, Contacto contacto) {
        return null;
    }

    @Override
    @Transactional
    public Contacto updateApellidos(Integer id, Contacto contacto) {
        return null;
    }

    @Override
    @Transactional
    public Telefono updateTelefono(Integer id, Telefono telefono) {
        return null;
    }

    @Override
    @Transactional
    public Telefono updateOnlyTelefono(Integer id, Telefono telefono) {
        return null;
    }

    @Override
    @Transactional
    public Contacto deleteContacto(Integer id) {
        return null;
    }

    @Override
    @Transactional
    public Telefono deleteTelefono(Integer id) {
        return null;
    }
}
