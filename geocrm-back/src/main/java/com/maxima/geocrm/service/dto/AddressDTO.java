package com.maxima.geocrm.service.dto;

import com.maxima.geocrm.domain.person.Person;

import java.math.BigDecimal;

public class AddressDTO  {



    private Long id;
    private String street;
    private String city;
    private String state;
    private String cep;
    private String country = "Brazil";
    private Person person;
    private BigDecimal latitude;
    private BigDecimal longitude;

    public AddressDTO() {}

    public AddressDTO(Long id, String street, String city, String state,
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
