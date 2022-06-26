package com.sofka.contactos.controller;

import com.sofka.contactos.domain.Contacto;
import com.sofka.contactos.domain.Telefono;
import com.sofka.contactos.service.LibretaService;
import com.sofka.contactos.utility.Response;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@RestController
public class LibretaController {

    @Autowired
    private LibretaService libretaService;
    private Response response = new Response();
    private HttpStatus httpStatus = HttpStatus.OK;

    @GetMapping(path = "/")
    public String andres(){
        return "Hola Mundo";
    }

    @GetMapping(path = "/S")
    public ResponseEntity<Response> homeIndex1(HttpServletResponse httpResponse) {
        return null;
    }
    @GetMapping(path = "/api/")
    public ResponseEntity<Response> homeIndex2(HttpServletResponse httpResponse) {
        return null;
    }
    @GetMapping(path = "/api/v1/")
    public ResponseEntity<Response> homeIndex3(HttpServletResponse httpResponse) {
        return null;
    }
    @GetMapping(path = "/api/v1/index")
    public ResponseEntity<Response> index() {
        return null;
    }
    @GetMapping(path = "/api/v1/index/orderby/{orderBy}/{order}")
    public ResponseEntity<Response> indexOrderBy(
            @PathVariable(value="orderBy") String orderBy,
            @PathVariable(value="order") Sort.Direction order
    ) {
        return null;
    }
    @GetMapping(path = "/api/v1/search/contact/{dataToSearch}")
    public ResponseEntity<Response> searchContactByNombreOrApellido(
            @PathVariable(value="dataToSearch") String dataToSearch
    ) {
        return null;
    }
    @PostMapping(path = "/api/v1/contact")
    public void createContacto(@RequestBody Contacto contacto) {
        log.info("Contacto a crear: {}", contacto);
    }
    //ResponseEntity<Response>
    @PostMapping(path = "/api/v1/phone")
    public ResponseEntity<Response> createTelefono(@RequestBody Telefono telefono) {
        return null;
    }
    @PutMapping(path = "/api/v1/contact/{id}")
    public ResponseEntity<Response> updateContacto(
            @RequestBody Contacto contacto,
            @PathVariable(value="id") Integer id
    ) {
        return null;
    }
    @PutMapping(path = "/api/v1/phone/{id}")
    public ResponseEntity<Response> updateTelefono(
            @RequestBody Telefono telefono,
            @PathVariable(value="id") Integer id
    ) {
        return null;
    }
    @PatchMapping(path = "/api/v1/contact/{id}/name")
    public ResponseEntity<Response> updateNombreFromContacto(
            @RequestBody Contacto contacto,
            @PathVariable(value="id") Integer id
    ) {
        return null;
    }
    @PatchMapping(path = "/api/v1/contact/{id}/lastname")
    public ResponseEntity<Response> updateApellidoFromContacto(
            @RequestBody Contacto contacto,
            @PathVariable(value="id") Integer id
    ) {
        return null;
    }
    @PatchMapping(path = "/api/v1/phone/{id}/number")
    public ResponseEntity<Response> updateOnlyTelefono(
            @RequestBody Telefono telefono,
            @PathVariable(value="id") Integer id
    ) {
        return null;
    }
    @DeleteMapping(path = "/api/v1/contact/{id}")
    public ResponseEntity<Response> deleteContacto(@PathVariable(value="id") Integer id) {
        return null;
    }
    @DeleteMapping(path = "/api/v1/phone/{id}")
    public ResponseEntity<Response> deleteTelefono(@PathVariable(value="id") Integer id) {
        return null;
    }
    private ResponseEntity<Response> getResponseHome(HttpServletResponse httpResponse) {
        return null;
    }
    private void getErrorMessageInternal(Exception exception) { }
    private void getErrorMessageForResponse(DataAccessException exception) { }

}
