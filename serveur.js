const express = require("express")
const translate = require("translate")

const app = express()
app.use(express.json())

app.post("/", async (req, res) => {
  const { texte } = req.body
  const traduction = await translate(texte, "fr")
  res.send(traduction)
})

app.listen(3000)
console.log("Serveur en marche")
