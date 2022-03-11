const { GraphQLString, GraphQLID } = require("graphql");
const { User, Employee } = require("../models");
const { createJWToken } = require("../util/auth");
const { EmployeeType } = require("./typedef");

const register = {
  type: GraphQLString,
  description: "Register a new user and return a token",
  args: {
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    displayName: { type: GraphQLString },
  },
  async resolve(_, args) {
    const { username, email, password, displayName } = args;

    const user = new User({ username, email, password, displayName });
    await user.save();

    const token = createJWToken({
      _id: user._id,
      username: user.username,
      email: user.email,
    });

    return token;
  },
};

const login = {
  type: GraphQLString,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(_, args) {
    const user = await User.findOne({ email: args.email }).select("+password");

    if (!user || args.password !== user.password)
      throw Error("Invalid Credentials");

    const token = createJWToken({
      _id: user._id,
      username: user.username,
      email: user.email,
    });

    return token;
  },
};

const createEmployee = {
  type: GraphQLString,
  description: "Create a new Employee",
  args: {
    name: { type: GraphQLString },
    lname: { type: GraphQLString },
    email: { type: GraphQLString },
    nationality: { type: GraphQLString },
    phone: { type: GraphQLString },
    civil_status: { type: GraphQLString },
    birthday: { type: GraphQLString },
  },
  async resolve(_, args) {
    const newEmployee = new Employee({
      name_employee: args.name,
      lname_employee: args.lname,
      email_employee: args.email,
      nationality: args.nationality,
      phone_employee: args.phone,
      civil_status: args.civil_status,
      birthday: args.birthday,
    });

    await newEmployee.save();

    return "New Employee create";
  },
};

const updateEmployee = {
  type: EmployeeType,
  description: "Update a Employee",
  args: {
    id: { type: GraphQLID },
    name_employee: { type: GraphQLString },
    lname_employee: { type: GraphQLString },
    email_employee: { type: GraphQLString },
    phone_employee: { type: GraphQLString },
  },
  async resolve(
    _,
    { id, name_employee, lname_employee, email_employee, phone_employee }
  ) {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      { _id: id },
      {
        name_employee,
        lname_employee,
        email_employee,
        phone_employee,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return updatedEmployee;
  },
};

const deleteEmployee = {
  type: GraphQLString,
  description: "Deleted this Employee",
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_, { id }) {
    const deleteEmployee = await Employee.findOneAndDelete({ _id: id });

    if (!deleteEmployee) throw new Error("Employee not exist");

    return "Employee deleted";
  },
};

module.exports = {
  register,
  login,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
