const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { response } = require('express');
const AUTHROUTE = require("./routes/auth");
const USERLOGIN = require("./routes/users");
const POSTCREATE = require("./routes/Posts")
const CATCREATE = require("./routes/Categories")
const COMCREATE = require("./routes/Comments")
const multer = require('multer');
const path = require('path');
const cors = require('cors');


const app = express();

app.use(
    cors({
       origin: "http://localhost:3000",
       optionsSuccessStatus: 200
})

)



dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname,"/images")))

// Connect to mongodb in the .env files.
const t1 = new Date();

const main = async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    
  })

  .then(console.log('Mongo'))


}
main() .catch(err => console.log(err));
const t2 = new Date();
console.log(`${t2-t1} MSecs`);


// this fn is to store the images uploaded from the 'req.body'
// destination: saves file to image folder

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});




// .then(response, () => {console.log('Mongo Works')})
// .catch(err =>  console.log(`Not working ${err}`) )

// Creating all users Routes 

app.use("/api/auth", AUTHROUTE); 
app.use("/api/login", USERLOGIN); 
app.use("/api/posts", POSTCREATE);  
app.use("/api/category", CATCREATE); 
app.use("/api/comment", COMCREATE); 

const port = process.env.port || 3500;

app.listen(port, () => {
    console.log(`Node is listening on Port ${port}`);
})