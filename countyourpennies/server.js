const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs, 
  resolvers
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({app});
};

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

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
})
});

startApolloServer(typeDefs, resolvers);