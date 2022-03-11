const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const { connectDB } = require("./db");
const cors = require('cors')

connectDB();
const app = new express();

app.use(
  cors(),
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3100);

console.log("Server is runing on port 3100");
