import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { resolve } from 'path'

import { Html } from '../client/html.js'

const server = express()
const PORT = process.env.PORT || 8080
const __dirname = process.cwd()

const middleware = [
  cors(),
  cookieParser(),
  express.json({ limit: '50kb' }),
  express.static(resolve(__dirname, 'dist'))
]

middleware.forEach((it) => server.use(it))

server.get('/', (req, res) => {
	res.send('Express server')
})

server.get('/*', (req, res) => {
  res.send(
    Html({
      body: ''
    })
  )
})

server.listen(PORT, () => {
	console.log(`Serving at http://localhost:${PORT}`)
})