import React from 'react';

const Task = ({ match, history }) => {
  const taskId= match.params.taskId;

  const handleFinishTask = (id)=>{
    console.log('finaliza', id);
    history.push("/home");
    console.log('finalotroiza', id);


  };
  return (
   <div>
    <h2>task</h2>
    {taskId}
    <button onClick={()=>{handleFinishTask(taskId)}}>finalizar Tarea  {taskId} </button>

  </div>
)};

export default Task;
