import dotenv from "dotenv";
dotenv.config();

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function seed() {
  try {
    await client.connect();
    const db = client.db();

    // Seed Departments 
    const deptCount = await db.collection("departments").countDocuments();
    if (deptCount === 0) {
      const departments = [
        { name: "Engineering", floor: 3 },
        { name: "Human Resources", floor: 1 },
        { name: "Finance", floor: 2 }
      ];
      await db.collection("departments").insertMany(departments);
      console.log("Departments seeded");
    } else {
      console.log("Departments already exist, skipping seeding");
    }

    // Seed Employees 
    const empCount = await db.collection("employees").countDocuments();
    if (empCount === 0) {
      const employees = [
        { name: "Alice", position: "Frontend Developer", department: "Engineering", salary: 80000 },
        { name: "Bob", position: "Backend Developer", department: "Engineering", salary: 90000 },
        { name: "Charlie", position: "HR Manager", department: "Human Resources", salary: 70000 },
        { name: "David", position: "Accountant", department: "Finance", salary: 65000 },
        { name: "Eva", position: "UI/UX Designer", department: "Engineering", salary: 75000 }
      ];
      await db.collection("employees").insertMany(employees);
      console.log("Employees seeded");
    } else {
      console.log("Employees already exist, skipping seeding");
    }

  } catch (err) {
    console.error("Error inserting seed data:", err);
  } finally {
    await client.close();
  }
}

seed();
