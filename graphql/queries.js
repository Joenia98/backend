const { GraphQLList, GraphQLID, GraphQLString } = require("graphql");
const { UserType, EmployeeType } = require("./typedef");
const { User, Employee } = require("../models");

const users = {
  type: new GraphQLList(UserType),
  resolve() {
    return User.find();
  },
};

const user = {
  type: UserType,
  description: "Get a user by id",
  args: {
    id: { type: GraphQLID },
  },
  resolve(_, args) {
    return User.findById(args.id);
  },
};

const employees = {
  type: new GraphQLList(EmployeeType),
  description: "Get all Employees",
  resolve: () => Employee.find().sort({ name_employee: 1 }),
};

const employee_by_id = {
  type: EmployeeType,
  description: "Get a Employe by id",
  args: {
    id: { type: GraphQLID },
  },
  resolve: (_, { id }) => Employee.findById(id),
};

const employee_by_name = {
  type: new GraphQLList(EmployeeType),
  description: "Get a Employe by name",
  args: {
    name_employee: { type: GraphQLString },
  },
  resolve: (_, { name_employee }) => Employee.find({ name_employee }),
};

const employee_by_last_name = {
  type: new GraphQLList(EmployeeType),
  description: "Get a Employe by last name",
  args: {
    lname_employee: { type: GraphQLString },
  },
  async resolve(_, args) {
    const employee = await Employee.find({
      lname_employee: args.lname_employee,
    });

    return employee;
  },
};

const employee_by_email = {
  type: new GraphQLList(EmployeeType),
  description: "Get a Employe by email",
  args: {
    email_employee: { type: GraphQLString },
  },
  async resolve(_, args) {
    const employee = await Employee.find({
      email_employee: args.email_employee,
    });

    return employee;
  },
};

const employee_by_nationality = {
  type: new GraphQLList(EmployeeType),
  description: "Get a Employe by nationality",
  args: {
    nationality: { type: GraphQLString },
  },
  async resolve(_, args) {
    const employee = await Employee.find({
      email_employee: args.nationality,
    });

    return employee;
  },
};

const employee_by_phone = {
  type: new GraphQLList(EmployeeType),
  description: "Get a Employe by phone",
  args: {
    phone_employee: { type: GraphQLString },
  },
  async resolve(_, args) {
    const employee = await Employee.find({
      phone_employee: args.phone_employee,
    });

    return employee;
  },
};

const employee_by_civil_status = {
  type: new GraphQLList(EmployeeType),
  description: "Get a Employe by civil status",
  args: {
    civil_status: { type: GraphQLString },
  },
  async resolve(_, args) {
    const employee = await Employee.find({
      civil_status: args.civil_status,
    });

    return employee;
  },
};

const employee_by_birthday = {
  type: new GraphQLList(EmployeeType),
  description: "Get a Employe by birthday",
  args: {
    birthday: { type: GraphQLString },
  },
  async resolve(_, args) {
    const employee = await Employee.find({
      birthday: args.birthday,
    });

    return employee;
  },
};

module.exports = {
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
};
