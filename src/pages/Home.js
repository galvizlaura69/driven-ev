import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../store/actions';

const Home = ({history}) => {

  const counter = useSelector(state => state.counter);

  const taskList = [1,2,3.1,3.2,4.1, 4.2,4.3,5.1,5.2,6];
  let newTaskList= taskList;

  counter.map( taskFinishId=>{
    newTaskList = newTaskList.filter(id => id != taskFinishId);
  })
  console.log('newTaskList',newTaskList)

  const handleDoTask = (id) =>{
    console.log('hace', id);
    history.push( `task/${id}`);

  };

  return (

  <div>
    <h2>Home task</h2>
    {counter}
    { newTaskList.map((idTask)=>(<button onClick={()=>{handleDoTask(idTask)}}>hacer tarea # {idTask}</button>)
    )}

    <button onClick={()=>{handleDoTask(55)}}>control</button>

  </div>
)};

export default Home;
