import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()



server.post('/videos', (request, reply) => {

  const { title, url, duration } = request.body

  database.create({
    title,
    url,
    duration,
  })

  return reply.status(201).send()
})

server.get('/videos', () => {
  const videos = database.list()

  console.log(videos)

  return videos
})

server.put('/videos/:id', () => {
  return 'Hello Node.js'
})

server.delete('/videos/:id', () => {
  return 'Hello Node.js'
})


server.listen({
  port: 3333,
})