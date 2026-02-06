const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = process.env.PORT || 5000




//mongoose configuration
async function main() {
  await mongoose.connect('mongodb+srv://shakilmahmud007_db_user:hPsScwR7zfyK0XP7@meta-blog-app.yzdgejo.mongodb.net/?appName=meta-blog-app');
}

main().then(() => console.log("Mongodb connected successfully!")).catch(err => console.log(err));


//routs
app.get('/', (req, res) => {
  res.send('Meta Blog Server is running....!')
})


app.listen(port, () =>{
  console.log(`Example app listening on port ${port}`)
})