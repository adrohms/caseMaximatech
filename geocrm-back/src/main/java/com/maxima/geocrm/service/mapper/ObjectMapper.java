package com.maxima.geocrm.service.mapper;

import com.maxima.geocrm.domain.person.Person;
import com.maxima.geocrm.domain.person.aggregate.Address;
import com.maxima.geocrm.service.dto.AddressDTO;
import com.maxima.geocrm.service.dto.PersonDTO;
import org.springframework.stereotype.Component;

@Component
public class ObjectMapper implements IObjectMapper {

    @Override
    public Person dtoToEntity(PersonDTO personDTO) {
        return new Person(
            personDTO.getId(),
            personDTO.getCode(),
            personDTO.getName(),
            personDTO.getEmail(),
            personDTO.getPhone(),
            personDTO.getAddresses()
        );
    }

    @Override
    public PersonDTO entityToDto(Person person) {
        return new PersonDTO(
            person.getId(),
            person.getCode(),
            person.getName(),
            person.getEmail(),
            person.getPhone(),
            person.getAddresses()
        );
    }

    @Override
    public Address dtoToEntity(AddressDTO addressDTO) {
        return new Address(
            addressDTO.getId(),
            addressDTO.getStreet(),
            addressDTO.getCity(),
            addressDTO.getState(),
            addressDTO.getZip(),
            addressDTO.getCountry(),
            addressDTO.getPerson()
        );
    }

    @Override
    public AddressDTO entityToDto(Address address) {
        return new AddressDTO(
            address.getId(),
            address.getStreet(),
            address.getCity(),
            address.getState(),
            address.getZip(),
            address.getCountry(),
            address.getPerson()
        );
    }
}
