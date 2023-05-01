# Case Maximatech

## Requisitos:
https://docs.google.com/document/d/1NJ0d15wkKLiGwWzpEUxG77uaQrR87VoHVm643TC7Me8/edit?usp=sharing

## Planejamento Trello:
https://trello.com/invite/b/jZvLsIbV/ATTIa8c9bd814a5e2cab73a4d648306b4b51B5646C88/crm-com-geolocalizacao

# JHipster:
Escopo inicial gerado com JHipster 7.9.3: [https://www.jhipster.tech/documentation-archive/v7.9.3](https://www.jhipster.tech/documentation-archive/v7.9.3).

## Execute as imagens do Postgres e do Redis antes de startar a aplicação:
```
docker-compose -f src/main/docker/postgresql.yml up -d
```

```
docker-compose -f src/main/docker/redis.yml up -d
```

## Development
Para rodar a aplicação, execute:

```
./mvnw
```

## Testing

```
./mvnw verify
```

## Swagger:
Logado como admin, acesse: http://localhost:9000/admin/docs
