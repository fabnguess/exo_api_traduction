import Fastify from "fastify"
import translate from "translate"

const serveur = Fastify()

const opts = {
  schema: {
    body: {
      type: "object",
      properties: {
        texte: { type: "string" },
        source: { type: "string" },
        cible: { type: "string" },
      },
    },
  },
}
serveur.post("/", opts, async (req, res) => {
  const { texte, source, cible } = req.body

  const traduction = await translate(texte, { from: source, to: cible })
  res.send(traduction)
})

serveur.listen(process.env.PORT || 3000, "0.0.0.0", (err, address) => {
  if (err) throw err
  console.log(`Le serveur écoute maintenant ${address}`)
})
