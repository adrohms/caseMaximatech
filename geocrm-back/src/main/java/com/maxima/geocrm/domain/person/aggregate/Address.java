package com.maxima.geocrm.domain.person.aggregate;

import com.maxima.geocrm.domain.AbstractAuditingEntity;
import com.maxima.geocrm.domain.person.Person;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

@Entity
@Table(name = "max_address")
public class Address extends AbstractAuditingEntity<Long> implements Serializable {

private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "street", nullable = false)
    private String street;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "state", nullable = false)
    private String state;

    @Column(name = "zip", nullable = false)
    private String cep;

    @Column(name = "country", nullable = false)
    private String country = "Brazil";

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "person_id", nullable = false)
    private Person person;

    @Column
    private BigDecimal latitude;

    @Column
    private BigDecimal longitude;

    public Address() {}

    public Address(Long id, String street, String city, String state,
                   String cep, String country, Person person, BigDecimal latitude, BigDecimal longitude) {
        this.id = id;
        this.street = street;
        this.city = city;
        this.state = state;
        this.cep = cep;
        this.country = country;
        this.person = person;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    @Override
    public Long getId() {
        return this.id;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public BigDecimal getLatitude() {
        return latitude;
    }

    public void setLatitude(BigDecimal latitude) {
        this.latitude = latitude;
    }

    public BigDecimal getLongitude() {
        return longitude;
    }

    public void setLongitude(BigDecimal longitude) {
        this.longitude = longitude;
    }
}
