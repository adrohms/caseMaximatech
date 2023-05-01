package com.maxima.geocrm.repository;

import com.maxima.geocrm.domain.person.aggregate.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {}
