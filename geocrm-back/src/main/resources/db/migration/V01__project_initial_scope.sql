-- Initial scope
CREATE TABLE IF NOT EXISTS MAX_USER (
                          id SERIAL PRIMARY KEY,
                          login VARCHAR(50) NOT NULL,
                          password_hash VARCHAR(60) NOT NULL,
                          first_name VARCHAR(50) NOT NULL,
                          last_name VARCHAR(50) NOT NULL,
                          email VARCHAR(254) NOT NULL,
                          activated BOOL NOT NULL DEFAULT FALSE,
                          lang_key VARCHAR(2),
                          image_url VARCHAR(256),
                          activation_key VARCHAR(20),
                          reset_key VARCHAR(20),
                          reset_date TIMESTAMP NULL,
                          created_by VARCHAR(50) NOT NULL,
                          created_date TIMESTAMP NULL,
                          last_modified_by VARCHAR(50),
                          last_modified_date TIMESTAMP NULL,
                          CONSTRAINT uq_user_email UNIQUE (email),
                          CONSTRAINT uq_user_login UNIQUE (login)
);

CREATE TABLE IF NOT EXISTS MAX_AUTHORITY (
    permission_name VARCHAR(50) NOT NULL,
    CONSTRAINT max_authority_pkey PRIMARY KEY (permission_name)
);


CREATE TABLE IF NOT EXISTS MAX_USER_AUTHORITY (
    user_id BIGINT NOT NULL,
    authority_permission_name VARCHAR(50) NOT NULL,
    CONSTRAINT max_user_authority_pkey PRIMARY KEY (user_id, authority_permission_name),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES max_user(id),
    CONSTRAINT fk_authority_permission_name FOREIGN KEY (authority_permission_name) REFERENCES max_authority(permission_name)
);


CREATE TABLE IF NOT EXISTS MAX_PERSON (
                        id SERIAL PRIMARY KEY,
                        code VARCHAR(255) NOT NULL,
                        name VARCHAR(255) NOT NULL,
                        tax_id VARCHAR(50) NOT NULL,
                        email VARCHAR(255) NOT NULL,
                        phone VARCHAR(100) NOT NULL,
                        created_by VARCHAR(50) NOT NULL,
                        created_date TIMESTAMP NULL,
                        last_modified_by VARCHAR(50),
                        last_modified_date TIMESTAMP NULL,
                        CONSTRAINT uq_person_code UNIQUE (code)
);

CREATE TABLE IF NOT EXISTS MAX_ADDRESS (
                         id SERIAL PRIMARY KEY,
                         street VARCHAR(255) NOT NULL,
                         city VARCHAR(255) NOT NULL,
                         state VARCHAR(255) NOT NULL,
                         country VARCHAR(255) NOT NULL DEFAULT 'Brazil',
                         cep VARCHAR(10) NOT NULL,
                         latitude NUMERIC NULL,
                         longitude NUMERIC NULL,
                         person_id INTEGER NOT NULL,
                         created_by VARCHAR(50) NOT NULL,
                         created_date TIMESTAMP NULL,
                         last_modified_by VARCHAR(50),
                         last_modified_date TIMESTAMP NULL,
                         CONSTRAINT fk_address_person FOREIGN KEY (person_id) REFERENCES max_person(id)
);
