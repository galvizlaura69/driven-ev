import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../store/actions';

const Home = ({history}) => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);


  const handleDoTask = (id) =>{
    console.log('hace', id);
    dispatch(allActions.counterActions.increment());
    history.push( `task/${id}`);

  };

  return (

  <div>
    <h2>Home task</h2>
    {counter}
    <button onClick={()=>{handleDoTask(123)}}>hacer tarea</button>

  </div>
)};

export default Home;
