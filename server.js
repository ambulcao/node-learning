//import { createServer } from 'node:http'

//const server = createServer((request, response) => {
//  response.write('Fiche Technique Portail Santa Battant Sur Mesure')

//  return response.end()
//})

//server.listen(3333)

import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
  return 'Hello World!'
})


server.get('/hello', () => {
  return 'Hello Jumbumtron'
})

server.get('/node', () => {
  return 'Hello Node.js'
})

server.listen({
  port: 3333,
})