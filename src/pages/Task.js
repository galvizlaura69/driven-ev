import React from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../store/actions';

const Task = ({ match, history }) => {
  const taskId= match.params.taskId;
  const dispatch = useDispatch();


  const handleFinishTask = (id)=>{
    dispatch(allActions.counterActions.addTask(id));
    history.push("/home");
  };
  return (
   <div>
    <h2>task</h2>
    {taskId}
    <button onClick={()=>{handleFinishTask(taskId)}}>finalizar Tarea  {taskId} </button>

  </div>
)};

export default Task;
