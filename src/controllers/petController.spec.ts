import app from '../app'
import request from 'supertest'

describe('Criar novo pet', () => {
  it('Deve ser possível cadastrar um novo pet', async () => {
    await request(app).post('/tutor').send({
      name: 'Teste-nome',
      phone: 'Número teste',
      email: 'teste_teste@outllok.com',
      date_of_birth: '2000-01-12 10:10',
      zip_code: '98726000'
    })

    const response = await request(app).post('/pet/1').send({
      name: 'pet-test-name',
      species: 'pet-test-species',
      carry: 'pet-test-carrys',
      weight: 4,
      date_of_birth: '2021-11-25 10:10'
    })

    expect(response.status).toBe(201)
  })

  it('Não deve ser possível cadastrar um novo pet com informações incorretas', async () => {
    const response = await request(app).post('/pet/1').send({
      species: 'pet-test-species',
      carry: 'pet-test-carrys',
      weight: 4,
      date_of_birth: '2021-11-25 10:10'
    })

    expect(response.status).toBe(400)
  })

  it('Não deve ser possível cadastrar um pet já cadastrado', async () => {
    await request(app).post('/pet/1').send({
      name: 'pet-test-name',
      species: 'pet-test-species',
      carry: 'pet-test-carrys',
      weight: 4,
      date_of_birth: '2021-11-25 10:10'
    })
    const response = await request(app).post('/pet/1').send({
      name: 'pet-test-name',
      species: 'pet-test-species',
      carry: 'pet-test-carrys',
      weight: 4,
      date_of_birth: '2021-11-25 10:10'
    })

    expect(response.status).toBe(400)
  })

  it('Não deve ser possível cadastrar um pet em um tutor não cadastrado', async () => {
    const response = await request(app).post('/pet/2').send({
      name: 'pet-test-name',
      species: 'pet-test-species',
      carry: 'pet-test-carrys',
      weight: 4,
      date_of_birth: '2021-11-25 10:10'
    })

    expect(response.status).toBe(400)
  })
})

describe('Alterar informações do pet', () => {
  it('Deve ser possível alterar informações sobre um pet válido', async () => {
    const response = await request(app).put('/pet/1/tutor/1').send({
      name: 'Teste-nome-put',
      phone: 'Número teste',
      email: 'teste_teste@outllok.com',
      date_of_birth: '2000-01-12 10:10',
      zip_code: '98726000'
    })

    expect(response.status).toBe(201)
  })

  it('Não deve ser possível alterar informações sobre um pet ou tutor não cadastrado', async () => {
    const response = await request(app).put('/pet/1/tutor/5').send({
      phone: 'Teste-phone-put-errado',
      email: 'teste_teste@outllok.com',
      date_of_birth: '2000-01-12 10:10',
      zip_code: '98726000'
    })

    expect(response.status).toBe(400)
  })
})

describe('Excluir pet', () => {
  it('Deve ser possível excluir pet', async () => {
    const response = await request(app).delete('/pet/1/tutor/1')

    expect(response.status).toBe(200)
  })

  it('Não deve ser possível excluir um pet não cadastrado', async () => {
    const response = await request(app).delete('/pet/1/tutor/5')

    expect(response.status).toBe(400)
  })
})
