import { ObjectId } from "mongodb";
import { connectDB } from "../config/db.js";

export async function getAllEmployees() {
  const db = await connectDB();
  return db.collection("employees").find({}, { projection: { name: 1, position: 1 } }).toArray();
}

export async function getEmployeeDetails(id) {
  const db = await connectDB();
  if (!ObjectId.isValid(id)) throw new Error("Invalid Employee ID");
  return db.collection("employees").findOne({ _id: new ObjectId(id) });
}

export async function getEmployeesByDepartment(department) {
  const db = await connectDB();
  return db.collection("employees").find({ department }).toArray();
}

export async function addEmployee(name, position, department, salary) {
  const db = await connectDB();
  const result = await db.collection("employees").insertOne({ name, position, department, salary });
  return { id: result.insertedId, name, position, department, salary };
}
