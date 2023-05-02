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
            personDTO.getTaxId(),
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
            person.getTaxId(),
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
            addressDTO.getSector(),
            addressDTO.getCity(),
            addressDTO.getState(),
            addressDTO.getCep(),
            addressDTO.getCountry(),
            addressDTO.getPerson(),
            addressDTO.getLatitude(),
            addressDTO.getLongitude()
        );
    }

    @Override
    public AddressDTO entityToDto(Address address) {
        return new AddressDTO(
            address.getId(),
            address.getStreet(),
            address.getSector(),
            address.getCity(),
            address.getState(),
            address.getCep(),
            address.getCountry(),
            address.getPerson(),
            address.getLatitude(),
            address.getLongitude()
        );
    }
}
