package com.maxima.geocrm.service.dto;

import com.maxima.geocrm.domain.person.aggregate.Address;

import java.util.ArrayList;
import java.util.List;


public class PersonDTO  {

    private Long id;
    private String code;
    private String name;
    private String email;
    private String phone;
    private List<Address> addresses = new ArrayList<>();

    public PersonDTO() {}

    public PersonDTO(Long id, String code, String name, String email, String phone, List<Address> addresses) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.addresses = addresses;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
