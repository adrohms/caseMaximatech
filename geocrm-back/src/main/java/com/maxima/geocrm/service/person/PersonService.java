package com.maxima.geocrm.service.person;

import com.maxima.geocrm.domain.person.Person;
import com.maxima.geocrm.domain.person.aggregate.Address;
import com.maxima.geocrm.repository.PersonRepository;
import com.maxima.geocrm.service.dto.PersonDTO;
import com.maxima.geocrm.service.mapper.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;
    @Autowired
    private ObjectMapper objectMapper;

    public Person createPerson(PersonDTO personDTO) {
        Person person = objectMapper.dtoToEntity(personDTO);
        person.getAddresses().forEach(address -> address.setPerson(person));
        return this.personRepository.save(person);
    }

    public void updatePerson(PersonDTO personDTO) {
        this.personRepository.save(objectMapper.dtoToEntity(personDTO));
    }

    public Person getPersonById(Long personId) {
        return personRepository.findById(personId).get();
    }

    public Boolean existsById(Long id) {
        return personRepository.existsById(id);
    }

    public Page<Person> findAllPaginated(Long id, String code, String name,
                                         String taxId, String email, String phone, Pageable pageable) {
        return this.personRepository.findByFilter(id, code, name, taxId, email, phone, pageable);
    }


}
