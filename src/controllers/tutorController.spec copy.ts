import app from "../app"
import request from "supertest"

describe("Listar tutores", () => {

  it("Deve ser possível listar os tutores", async () => {
    const response = await request(app).get("/tutors")

    expect(response.status).toBe(200)
  })
})

describe("Criar novo tutor", () => {

  it("Deve ser possível cadastrar um novo tutor", async () => {

    const response = await request(app)
      .post("/tutor")
      .send({
        "name": "Teste-nome",
        "phone": "Número teste",
        "email": "teste_teste@outllok.com",
        "date_of_birth": "2000-01-12 10:10",
        "zip_code": "98726000"
      })

    expect(response.status).toBe(201)
  })

  it("Não deve ser possível cadastrar um novo tutor com informações incorretas", async () => {

    const response = await request(app)
      .post("/tutor")
      .send({
        "phone": "Número teste",
        "email": "teste_teste@outllok.com",
        "date_of_birth": "2000-01-12 10:10",
        "zip_code": "98726000"
      })

    expect(response.status).toBe(400)
  })

  it("Não deve ser possível cadastrar um tutor já cadastrado", async () => {

    await request(app)
      .post("/tutor")
      .send({
        "name": "Teste-nome-exist",
        "phone": "Número teste",
        "email": "teste_teste@outllok.com",
        "date_of_birth": "2000-01-12 10:10",
        "zip_code": "98726000"
      })
    const response = await request(app)
      .post("/tutor")
      .send({
        "name": "Teste-nome-exist",
        "phone": "Número teste",
        "email": "teste_teste@outllok.com",
        "date_of_birth": "2000-01-12 10:10",
        "zip_code": "98726000"
      })

    expect(response.status).toBe(400)
  })
})

describe("Alterar informações do tutor", () => {

  it("Deve ser possível alterar informações sobre um tutor válido", async () => {

    const response = await request(app)
      .put("/tutor/1")
      .send({
        "name": "Teste-nome",
        "phone": "Número teste",
        "email": "teste_teste@outllok.com",
        "date_of_birth": "2000-01-12 10:10",
        "zip_code": "98726000"
      })

    expect(response.status).toBe(201)
  })

  it("Não deve ser possível alterar informações sobre um tutor não cadastrado", async () => {

    const response = await request(app)
      .put("/tutor/5")
      .send({
        "phone": "Número teste",
        "email": "teste_teste@outllok.com",
        "date_of_birth": "2000-01-12 10:10",
        "zip_code": "98726000"
      })

    expect(response.status).toBe(400)
  })

})

describe("Excluir tutor", () => {

  it("Deve ser possível excluir tutor", async () => {

    const response = await request(app)
      .delete("/tutor/1")

    expect(response.status).toBe(200)
  })

  it("Não deve ser possível excluir um tutor não cadastrado", async () => {

    const response = await request(app)
      .delete("/tutor/5")

    expect(response.status).toBe(400)
  })

})
