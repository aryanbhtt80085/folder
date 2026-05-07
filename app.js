const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Application Running')
})

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP'
    })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

module.exports = app
