import { addTask, removeTask, markDone, getAll } from "./services/taskService.js";

getAll()
addTask(3, 'a', false, 'b')
getAll()
removeTask(3)
getAll()
markDone(true, 1)
getAll()