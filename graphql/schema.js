const { GraphQLSchema, GraphQLObjectType } = require("graphql");

const {
  users,
  user,
  employees,
  employee_by_id,
  employee_by_name,
  employee_by_last_name,
  employee_by_email,
  employee_by_nationality,
  employee_by_phone,
  employee_by_civil_status,
  employee_by_birthday,
} = require("./queries");

const {
  register,
  login,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("./mutation");

const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "The root query type",
  fields: {
    users,
    user,
    employees,
    employee_by_id,
    employee_by_name,
    employee_by_last_name,
    employee_by_email,
    employee_by_nationality,
    employee_by_phone,
    employee_by_civil_status,
    employee_by_birthday,
  },
});

const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "The root mutation type",
  fields: {
    register,
    login,
    createEmployee,
    updateEmployee,
    deleteEmployee,
  },
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
