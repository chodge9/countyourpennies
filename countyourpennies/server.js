const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();

mongoose.connect(process.env.CYP, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(
    () => {
        console.log('We are connected!')
    }
) .catch((err)=> console.log("Try again! LOSER", err))


app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/",(req,res)=>{
    res.send("Welcome to Count Your Pennies!")
  })
  
  app.get("/users",(req,res) => {
    res.send("Welcome to User Dasboard!")
  })


app.listen(3003, ()=>{
    console.log("Server is live!")
})