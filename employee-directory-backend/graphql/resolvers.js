
import { getAllEmployees,getEmployeeDetails,
  getEmployeesByDepartment,
  addEmployee } from "../models/employeeModel.js";

const resolvers = {
  Query: {
    getAllEmployees: async () => getAllEmployees(),
    getEmployeeDetails: async (_, { id }) => getEmployeeDetails(id),
    getEmployeesByDepartment: async (_, { department }) => getEmployeesByDepartment(department)
  },
  Mutation: {
    addEmployee: async (_, { name, position, department, salary }) =>
      addEmployee(name, position, department, salary)
  },
  Employee: {
    id: (parent) => parent._id?.toString() || parent.id
  }
};

export default resolvers;
