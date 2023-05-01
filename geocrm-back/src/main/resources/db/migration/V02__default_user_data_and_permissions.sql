-- initial user data

insert into max_user (id,login,password_hash,first_name,last_name,email,image_url,activated,lang_key,created_by,last_modified_by)
    values (1,'admin','$2a$10$gSAhZrxMllrbgj/kkK9UceBPpChGWJA7SYIb1Mqo.n5aNLq1/oRrC',
        'Maxima','Tech','maxtech@maxtech',null,true,'en','system','system');

insert into max_user (id,login,password_hash,first_name,last_name,email,image_url,activated,lang_key,created_by,last_modified_by)
    values (2,'user','$2a$10$VEjxo0jq2YG9Rbk2HmX9S.k1uZBGYUHdUcid3g/vfiEl7lwWgOH/K',
        'User','User','user@user',null,true,'en','system','system');

insert into max_authority (permission_name) values ('ROLE_ADMIN');
insert into max_authority (permission_name) values ('ROLE_USER');

insert into max_user_authority (user_id,authority_permission_name) values (1,'ROLE_ADMIN');
insert into max_user_authority (user_id,authority_permission_name) values (1,'ROLE_USER');
insert into max_user_authority (user_id,authority_permission_name) values (2,'ROLE_USER');
