
export function craetTask(id, title, done, owner){
    const task = {}
    if (typeof id === "number" && typeof title === "string" && typeof done === "boolean" && typeof owner === "string") {   
        task.id = id
        task.title = title
        task.done = done
        task.owner = owner
        return task
    }else{
        throw new Error("tyoe error!");
        
    }
}

