//import { createServer } from 'node:http'

//const server = createServer((request, response) => {
//  response.write('Fiche Technique Portail Santa Battant Sur Mesure')

//  return response.end()
//})

//server.listen(3333)

import { fastify } from 'fastify'

const server = fastify()

// POST http://localhost:3333/videos

server.post('/videos', () => {
  return 'Hello World!'
})


server.get('/videos', () => {
  return 'Hello Jumbumtron'
})

// PUT http://localhost:3333/videos/id

server.put('/videos/:id', () => {
  return 'Hello Node.js'
})


server.delete('/videos/:id', () => {
  return 'Hello Node.js'
})


server.listen({
  port: 3333,
})