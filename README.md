<h1 align="center">Veterinary - Challenge #01</h1>

## Descrição do desafio

A client hired Compass to build a new microservice for its veterinary franchise. This microservice
will be used by all the clinics they own for internal client and attendances management.

So, you have this new mission, to build the POC foundations of this brand new microservice,
so the sales and management team can have the primary technical view of the needs
that the client has.

## Características / Funcionalidades

Create a REST API following the requested patterns:

• GET /tutors -> Retrieves all tutors.

• POST/tutor -> Create a new tutor.

• PUT/tutor/:id -> Updates a tutor.

• DELETE/tutor/:id -> Deletes a tutor.

• POST/pet/:tutorId-> Creates a pet and adds it to a tutor.

• PUT/pet/:petId/tutor/:tutorId -> updates a pet's info

• DELETE/pet/:petId/tutor/:tutorId -> deletes a pet from a tutor.

## Requisitos Obrigatórios

• Readability

• Private repository

• Small commits

• Commit pattern

• TypeScript

• Express

• Readme.md

• Explanation of how to run locally

• Share the repository's access with the class monitors for evaluation

## Requisitos Opcionais

• Eslint

• Prettier

• Testing (chai/mocha, jest/supertest)

• Swagger

## Instalação

Você precisará ter o [NodeJS](https://nodejs.org) instalado na sua máquina, e, após isso, clonar este repositório:

```sh
  $ git clone https://github.com/JeanCarlosDelai/Veterinary.git
```

Depois disso, instale as dependências

```sh
  $ cd Veterinary && npm install
```

## Executando a aplicação

Primeiro acesse a pasta do back-end e execute o seguinte comando:

```sh
  $ npm run dev
```

## Tecnologias Utilizadas

• Node.js

• Typescript

• Express
