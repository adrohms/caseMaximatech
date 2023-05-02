package com.maxima.geocrm.domain.person;

import com.maxima.geocrm.domain.AbstractAuditingEntity;
import com.maxima.geocrm.domain.person.aggregate.Address;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "max_person")
public class Person extends AbstractAuditingEntity<Long> implements Serializable  {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "personGenerator")
    @SequenceGenerator(name = "personGenerator", sequenceName = "personSequence", allocationSize=1)
    private Long id;

    @Column(name = "code", nullable = false, unique = true)
    private String code;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "tax_id", nullable = false)
    private String taxId;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "phone", nullable = false)
    private String phone;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "person")
    private List<Address> addresses = new ArrayList<>();

    public Person() {}

    public Person(Long id, String code, String name, String taxId, String email, String phone, List<Address> addresses) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.taxId = taxId;
        this.email = email;
        this.phone = phone;
        this.addresses = addresses;
    }

    @Override
    public Long getId() {
        return this.id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTaxId() {
        return taxId;
    }

    public void setTaxId(String taxId) {
        this.taxId = taxId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public List<Address> getAddresses() {
        return addresses;
    }

    public void setAddresses(List<Address> addresses) {
        this.addresses = addresses;
    }
}
