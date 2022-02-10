import Fastify from "fastify"
import translate from "translate"

const serveur = Fastify()

serveur.post("/", async (req, res) => {
  const { texte } = req.body
  const traduction = await translate(texte, "fr")
  res.send(traduction)
})

serveur.listen(process.env.PORT || 3000, (err, address) => {
  if (err) throw err
  console.log(`Le serveur écoute maintenant ${address}`)
})
