import React from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../store/actions';

const Task = ({ match, history }) => {
  const taskId= match.params.taskId;
  const dispatch = useDispatch();


  const handleFinishTask = (id)=>{
    dispatch(allActions.taskActions.addTask(id));
    history.push("/home");
  };

  return (
   <div className='cardFinish'>
    <button className='buttontask' onClick={()=>{handleFinishTask(taskId)}}>Finalizar tarea #{taskId} </button>
  </div>
)};

export default Task;
