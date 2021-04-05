const { ApolloServer } = require('apollo-server');
const typeDefs = require("./typeDefs")
const resolvers = require("./resolvers")
const mongoose = require("mongoose")
const server = new ApolloServer({ typeDefs, resolvers });
const dotenv = require('dotenv');
dotenv.config()
const MONGODB  = process.env.MONGODB


const PORT = process.env.port || 4000
mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Database Connected")
})
server.listen({port:PORT})
.then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});