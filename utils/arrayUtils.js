
export function findById(list, id){
    for (const task of list) {
        if (task.id === id){
            return task
        }
    }
}

export function removeById(list, id){
    list.forEach((task, index) => {
        if (task.id === id) {
            list.splice(index, 1)
        }
        
    });
}