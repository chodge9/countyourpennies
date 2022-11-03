const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");
<<<<<<< HEAD
const db = require('./config/connection');

=======
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3003;
const server = new ApolloServer({
  typeDefs, 
  resolvers
});

>>>>>>> 5ace68cb31ce96b63bbcff999e1a35b8276632f4

dotenv.config();

mongoose.connect(process.env.CYP, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(
    () => {
        console.log('We are connected!')
    }
) .catch((err)=> console.log("Try again! LOSER", err))

app.use(express.urlencoded({ extended: false }));
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
