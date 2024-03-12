import { DataService } from "./data.service.js";
import { createPath } from "../utils.js";

const TASKS_PATH = createPath(["data", "students.json"]);

const getStudents = async (tasks) => {
  await DataService.saveJSONFile(TASKS_PATH, tasks);
};

//1. Get all tasks
export const getAllStudents = async () => {
  const tasks = await DataService.readJSONFile(TASKS_PATH);

  return tasks;
};
