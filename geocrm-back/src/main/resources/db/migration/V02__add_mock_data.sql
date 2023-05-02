-- mock data
-- fake data:
INSERT INTO max_person (id, code, name, tax_id, email, phone, created_by, last_modified_by)
VALUES (1, '001', 'John Doe', '12345678900', 'johndoe@example.com', '555-5555', 'system', 'system');

INSERT INTO max_address (id, street, sector, city, state, cep, country, person_id, latitude, longitude, created_by, last_modified_by)
VALUES (1, 'Rua Augusta', 'Centro', 'São Paulo', 'SP', '01310-100', 'Brazil', 1, -23.555478, -46.640846, 'system', 'system');
INSERT INTO max_address (id, street, sector, city, state, cep, country, person_id, latitude, longitude, created_by, last_modified_by)
VALUES (2, 'Avenida Paulista', 'Bela Vista', 'São Paulo', 'SP', '01310-100', 'Brazil', 1, -23.563881, -46.654455, 'system', 'system');


INSERT INTO max_person (id, code, name, tax_id, email, phone, created_by, last_modified_by)
VALUES (2, '002', 'Mary Smith', '98765432100', 'marysmith@example.com', '444-4444', 'system', 'system');

INSERT INTO max_address (id, street, sector, city, state, cep, country, person_id, latitude, longitude, created_by, last_modified_by)
VALUES (3, 'Rua 25 de Março', 'Centro', 'São Paulo', 'SP', '01014-001', 'Brazil', 2, -23.545967, -46.634463, 'system', 'system');


INSERT INTO max_person (id, code, name, tax_id, email, phone, created_by, last_modified_by)
VALUES (3, '9763', 'Fernanda Silva', '274.831.014-98', 'fernanda.silva@gmail.com', '(11) 98877-8899', 'system', 'system');
INSERT INTO max_address (id, street, sector, city, state, cep, country, person_id, latitude, longitude, created_by, last_modified_by)
VALUES (4, 'Rua Oscar Freire', 'Cerqueira César', 'São Paulo', 'SP', '01426-001', 'Brazil', 3, -23.5665847, -46.6747581, 'system', 'system');
INSERT INTO max_address (id, street, sector, city, state, cep, country, person_id, latitude, longitude, created_by, last_modified_by)
VALUES (5, 'Rua das Figueiras', 'Centro', 'Jundiaí', 'SP', '13201-150', 'Brazil', 3, -23.1913859, -46.8846618, 'system', 'system');

INSERT INTO max_person (id, code, name, tax_id, email, phone, created_by, last_modified_by)
VALUES (4, '1578', 'Rodrigo Oliveira', '859.734.863-02', 'rodrigo.oliveira@gmail.com', '(21) 99876-5432', 'system', 'system');
INSERT INTO max_address (id, street, sector, city, state, cep, country, person_id, latitude, longitude, created_by, last_modified_by)
VALUES (6, 'Avenida Atlântica', 'Copacabana', 'Rio de Janeiro', 'RJ', '22021-000', 'Brazil', 4, -22.9690429, -43.1853324, 'system', 'system');
INSERT INTO max_address (id, street, sector, city, state, cep, country, person_id, latitude, longitude, created_by, last_modified_by)
VALUES (7, 'Rua Humaitá', 'Humaitá', 'Rio de Janeiro', 'RJ', '22261-001', 'Brazil', 4, -22.9512963, -43.1910801, 'system', 'system');

INSERT INTO max_person (id, code, name, tax_id, email, phone, created_by, last_modified_by)
VALUES (5, '2346', 'Carla Santos', '398.532.675-17', 'carla.santos@gmail.com', '(31) 98877-6543', 'system', 'system');
INSERT INTO max_address (id, street, sector, city, state, cep, country, person_id, latitude, longitude, created_by, last_modified_by)
VALUES (8, 'Rua Maranhão', 'Santa Efigênia', 'Belo Horizonte', 'MG', '30150-330', 'Brazil', 5, -19.9276383, -43.9299985, 'system', 'system');

INSERT INTO max_person (id, code, name, tax_id, email, phone, created_by, last_modified_by)
VALUES (6, '6547', 'Lucas Oliveira', '789.352.641-50', 'lucas.oliveira@gmail.com', '(41) 98876-5432', 'system', 'system');

