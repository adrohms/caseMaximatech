package com.maxima.geocrm.web.rest.person;

import com.maxima.geocrm.domain.person.Person;
import com.maxima.geocrm.repository.PersonRepository;
import com.maxima.geocrm.security.AuthoritiesConstants;
import com.maxima.geocrm.service.dto.PersonDTO;
import com.maxima.geocrm.service.mapper.ObjectMapper;
import com.maxima.geocrm.service.person.PersonService;
import com.maxima.geocrm.web.rest.errors.BadRequestAlertException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springdoc.api.annotations.ParameterObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.ResponseUtil;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@Transactional
public class PersonResource {

    private final Logger log = LoggerFactory.getLogger(PersonResource.class);

    @Autowired
    private PersonService personService;
    @Autowired
    private ObjectMapper objectMapper;

    private static final String ENTITY_NAME = "max_person";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;
    @Autowired
    private PersonRepository personRepository;

    @PostMapping("/person")
    @PreAuthorize("hasAuthority(\"" + AuthoritiesConstants.ADMIN + "\")")
    public ResponseEntity<Person> createPerson(@Valid @RequestBody PersonDTO personDTO) throws URISyntaxException {
        log.debug("REST request to save Person : {}", personDTO);

        Person newPerson = personService.createPerson(personDTO);
        return ResponseEntity
            .created(new URI("/api/person/" + newPerson.getId()))
            .headers(
                HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME,
                    newPerson.getCode())
            )
            .body(newPerson);
    }

    @PutMapping("/person")
    @PreAuthorize("hasAuthority(\"" + AuthoritiesConstants.ADMIN + "\")")
    public ResponseEntity<Person> updatePerson(
        @PathVariable(value = "id", required = false) final Long id,
        @Valid @RequestBody PersonDTO personDTO
    ) {
        Person person = objectMapper.dtoToEntity(personDTO);

        log.debug("REST request to update Person : {}, {}", id, person);
        if (person.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, person.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }
        if (!personService.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        personRepository.save(person);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, person.getId().toString()))
            .body(person);
    }

    @GetMapping("/person/persons")
    @PreAuthorize("hasAuthority(\"" + AuthoritiesConstants.USER + "\")")
    public Page<Person> getAllPersons(
        @RequestParam(name = "id", required = false) Long id,
        @RequestParam(name = "code", required = false) String code,
        @RequestParam(name = "name", required = false) String name,
        @RequestParam(name = "taxId", required = false) String taxId,
        @RequestParam(name = "email", required = false) String email,
        @RequestParam(name = "phone", required = false) String phone,
        @ParameterObject Pageable pageable
    ) {
        log.debug("Get persons by filter");
        return personService.findAllPaginated(id, code, name, taxId, email, phone, pageable);
    }

    @GetMapping("/person/{id}")
    @PreAuthorize("hasAuthority(\"" + AuthoritiesConstants.ADMIN + "\")")
    public ResponseEntity<Person> getPersonByPersonId(@PathVariable Long id) {
        log.debug("REST request to get Person : {}", id);
        Optional<Person> person = personRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(person);
    }

}
