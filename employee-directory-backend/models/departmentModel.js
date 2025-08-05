import { connectDB } from "../config/db.js";

export async function getAllDepartments() {
  const db = await connectDB();
  return db.collection("departments").find().toArray();
}
