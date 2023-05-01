package com.maxima.geocrm.service.mapper;

import com.maxima.geocrm.domain.person.Person;
import com.maxima.geocrm.domain.person.aggregate.Address;
import com.maxima.geocrm.service.dto.AddressDTO;
import com.maxima.geocrm.service.dto.PersonDTO;
import org.mapstruct.Mapper;

@Mapper
public interface IObjectMapper {

    Person dtoToEntity(PersonDTO personDTO);
    PersonDTO entityToDto(Person person);

    Address dtoToEntity(AddressDTO addressDTO);
    AddressDTO entityToDto(Address address);

}
