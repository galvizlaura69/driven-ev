const addTask = (id) => {
    return {
        type: "ADD_TASK",
        payload: id
    }
}

export default {
    addTask
}