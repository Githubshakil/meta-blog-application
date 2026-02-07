const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const port = process.env.PORT || 5000
require('dotenv').config()

//middleware
app.use(express.json())
app.use(cors())
//routes

const blogRoutes = require('./src/routes/blog.route')
app.use('/blogs', blogRoutes)




//mongoose configuration
async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  //routs
app.get('/', (req, res) => {
  res.send('Meta Blog Server is running....!')
})


}
main().then(() => console.log("MongoDB connected successfully!")).catch(err => console.log(err));




app.listen(port, () =>{
  console.log(`Example app listening on port ${port}`)
})