import React from 'react';

const Home = ({history}) => {
  const handleDoTask = (id) =>{
    console.log('hace', id);
    history.push( `task/${id}`);

  };

  return (

  <div>
    <h2>Home task</h2>
    <button onClick={()=>{handleDoTask(123)}}>hacer tarea</button>
  </div>
)};

export default Home;
