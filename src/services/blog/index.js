
import express from "express";
import fs from 'fs'
import path,  { dirname } from "path";
import { fileURLToPath } from "url";



const postsRouter = express.Router()


// GET /blogPosts => http://localhost:3001/blogPosts/
// GET /blogPosts /123 => http://localhost:3001/blogPosts/:id
// POST /blogPosts => http://localhost:3001/blogPosts/
// PUT /blogPosts /123 => http://localhost:3001/blogPosts/:id
// DELETE /blogPosts /123 => http://localhost:3001/blogPosts/:id



const fileSelf = fileURLToPath(import.meta.url)
const fileFolder = dirname(fileSelf)

const postsJSONPath = path.join(fileFolder, "posts.json")




postsRouter.get('/', (req, res, next)=>{
   const postsJSONContent = fs.readFileSync(postsJSONPath)
   const contentAsJSON = JSON.parse(postsJSONContent)
   res.send(contentAsJSON)

})

postsRouter.get('/:id', (req, res, next)=>{
    const postsJSONContent = fs.readFileSync(postsJSONPath)
   const contentAsJSON = JSON.parse(postsJSONContent)

    const post = contentAsJSON.find((post)=> post.id === req.params.id)
    if(!post){
        res.status(404).send({message: `Post with ${req.params.id} not found!`})
    }

   res.send(post)

})

postsRouter.post('/', (req, res, next)=>{
    const {category, title, cover, readTime } = req.body

})

postsRouter.put('/:id', (req, res, next)=>{

})

postsRouter.delete('/:id', (req, res, next)=>{

})



export default postsRouter