const express = require('express')
const translate = require('translate')

const app = express()
app.use(express.json())

app.post('/', async(req, res) => {
    const { texte, cible } = req.body
    const traduction = await translate(texte, { from: 'fr', to: cible })
    res.send(traduction)
})

app.listen(3000)
console.log('Serveur en marche');