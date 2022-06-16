import request from 'supertest'
import {app} from '../../../../app'

describe('Create user controller', () => {

    it('create user', async () => {
        const response = await request(app).post('/api/v1/users').send({
            name: 'gustavo torregrosa',
            email: 'gustavo.torregrosa@gmail.com',
            password: 'gustavo01'
        })

        await expect(response.status).toBe(201)
    })


})