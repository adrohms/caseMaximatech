package com.maxima.geocrm.repository;

import com.maxima.geocrm.domain.person.Person;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

    @Query("FROM Person p WHERE(:id IS NULL OR :id = p.id) " +
        "AND (:name IS NULL OR LOWER(:name) = LOWER(p.name)) " +
        "AND (:code IS NULL OR :code = p.code) " +
        "AND (:taxId IS NULL OR :taxId = p.taxId) " +
        "AND (:email IS NULL OR :email = p.email) " +
        "AND (:phone is NULL OR :phone = p.phone)"
    )
    Page<Person> findByFilter(
        @Param("id") Long id,
        @Param("code") String code,
        @Param("name") String name,
        @Param("taxId") String taxId,
        @Param("email") String email,
        @Param("phone") String phone,
        Pageable pageable
    );
}
