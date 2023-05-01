package com.maxima.geocrm.service.person;

import com.maxima.geocrm.domain.person.Person;
import com.maxima.geocrm.repository.PersonRepository;
import com.maxima.geocrm.service.dto.PersonDTO;
import com.maxima.geocrm.service.mapper.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;
    @Autowired
    private ObjectMapper objectMapper;

    public Person createPerson(PersonDTO personDTO) {
        Person person = objectMapper.dtoToEntity(personDTO);
        return this.personRepository.save(person);
    }

    public void updatePerson(PersonDTO personDTO) {

    }

    public Person getPersonById(Integer personId) {
        return personRepository.findById(Long.valueOf(personId)).get();
    }

    public Boolean existsById(Long id) {
        return personRepository.existsById(id);
    }




}
