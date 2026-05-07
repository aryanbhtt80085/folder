const request = require('supertest')

const express = require('express')

const app = express()

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP'
    })
})

describe('Health Check API', () => {

    test('GET /health returns 200', async () => {

        const response = await request(app).get('/health')

        expect(response.statusCode).toBe(200)

        expect(response.body.status).toBe('UP')
    })
})
