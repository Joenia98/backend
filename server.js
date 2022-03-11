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

app.set('port', process.env.PORT || 3100);

app.listen(app.get('port'));

