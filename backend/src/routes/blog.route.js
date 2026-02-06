const express = require('express')
const Blog = require('../models/blog.model')
const router = express.Router()



router.get('/', (req, res) => {
  res.send('From Blog Routes!')
})

//post a new blog
router.post('/add-post', async(req, res) => {
    const newBlog = new Blog({
        ...req.body
    })
    const blog = await newBlog.save()
    res.status(200).send({message: "Blog added successfully!", blog})
})


module.exports = router