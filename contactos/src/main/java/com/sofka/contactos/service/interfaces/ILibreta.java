package com.sofka.contactos.service.interfaces;

import com.sofka.contactos.domain.Contacto;
import com.sofka.contactos.domain.Telefono;
import org.springframework.data.domain.Sort;

import java.util.List;

public interface ILibreta {

    public List<Contacto> getList();

    public List<Contacto> getList(String field, Sort.Direction order);

    public List<Contacto> searchContacto(String dataToSearch);

    public Contacto createContacto(Contacto contacto);

    public Telefono createTelefono(Telefono telefono);

    Contacto updateContacto(Integer id, Contacto contacto);

    public Contacto updateNombre(Integer id, Contacto contacto);

    public Contacto updateApellidos(Integer id, Contacto contacto);

    public Telefono updateTelefono(Integer id, Telefono telefono);

    public Telefono updateOnlyTelefono(Integer id, Telefono telefono);

    Contacto deleteContacto(Integer id);

    Telefono deleteTelefono(Integer id);

}
