import { createServer } from 'node:http'

const server = createServer((request, response) => {
  response.write('Fiche Technique Portail Santa Battant Sur Mesure')

  return response.end()
})

server.listen(3333)