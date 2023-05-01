package com.maxima.geocrm.repository;

import com.maxima.geocrm.domain.person.aggregate.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

    @Query("FROM Address ads WHERE(:personId = ads.person.id)")
    List<Address> findAddressByPersonId(@Param("personId") Long personId);
}
