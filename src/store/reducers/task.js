const task = (state = [], action) => {
    switch(action.type){
        case "ADD_TASK":
            const tempList= state;
            tempList.push(action.payload);
            return tempList;
        default: 
            return state
    }
}

export default task