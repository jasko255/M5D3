import express from 'express'
import listEndpoints from 'express-list-endpoints'
import cors from 'cors'
import postsRouter from './services/blog/index.js'


const port = 3001
const server = express()

server.use(cors())

server.use(express.json())


//****************endponts

server.use('/blogPosts', postsRouter)

console.table(listEndpoints(server))

server.listen(port, () => {
    console.log('server is running on port ' + port);
})
