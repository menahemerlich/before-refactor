import tasks from "../data/tasks.js";
import { craetTask } from "../models/Task.js";
import { findById, removeById } from "../utils/arrayUtils.js";


export function addTask(id, title, done, owner) {
    const task = craetTask(id, title, done, owner)
    tasks.push(task)
}

export function removeTask(id) {
    removeById(tasks, id)
    
}

export function markDone(done, id) { 
    if (typeof done == "boolean"){
        const taskForMark = findById(tasks, id)
        for (const task of tasks) {
            if (task.id === taskForMark.id){
                task.done = done
            }
        }
    }else{throw new Error("type erroe!");
    }
}

export function getAll() {
    for (const task of tasks) {
        console.log(task);
    }
}
