package com.maxima.geocrm.web.rest.person;

import com.maxima.geocrm.domain.person.aggregate.Address;
import com.maxima.geocrm.repository.AddressRepository;
import com.maxima.geocrm.security.AuthoritiesConstants;
import com.maxima.geocrm.service.mapper.ObjectMapper;
import com.maxima.geocrm.service.person.AddressService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@Transactional
public class AddressResource {

    @Autowired
    private AddressService addressService;
    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private ObjectMapper objectMapper;

    private static final String ENTITY_NAME = "max_address";
    private final Logger log = LoggerFactory.getLogger(PersonResource.class);

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    @GetMapping("/address/{personId}")
    @PreAuthorize("hasAuthority(\"" + AuthoritiesConstants.ADMIN + "\")")
    public List<Address> getAddressesByPersonId(@PathVariable Long personId) {
        log.debug("REST request to get Address : {}", personId);
        return addressRepository.findAddressByPersonId(personId);
    }
}
