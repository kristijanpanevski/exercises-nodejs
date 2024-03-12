import express from "express";

import { getAllStudents } from "./src/tasks.js";

const app = express();

app.use(express.json());

app.get("/students", async (req, res) => {
  try {
    const students = await getAllStudents();

    return res.json(students);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is up at port 3000");
});
