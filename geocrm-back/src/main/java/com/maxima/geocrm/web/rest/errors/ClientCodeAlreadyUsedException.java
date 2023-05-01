package com.maxima.geocrm.web.rest.errors;

public class ClientCodeAlreadyUsedException extends BadRequestAlertException {

    private static final long serialVersionUID = 1L;

    public ClientCodeAlreadyUsedException() {
        super(ErrorConstants.CLIENT_CODE_ALREADY_USED_TYPE, "Código do cliente já existe!", "userManagement", "userexists");
    }
}
