const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User_type",
  description: "The user type definition",
  fields: {
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    displayName: { type: GraphQLString },
  },
});

const EmployeeType = new GraphQLObjectType({
  name:"Employee_type",
  description: "The employee type definition",
  fields: {
    id: { type: GraphQLID },
    name_employee: {type:GraphQLString},
    lname_employee: {type:GraphQLString},
    email_employee: {type:GraphQLString},
    nationality: {type:GraphQLString},
    phone_employee: {type:GraphQLString},
    civil_status: {type:GraphQLString},
    birthday: {type:GraphQLString},
  },
})

module.exports = {
  UserType,
  EmployeeType
};
