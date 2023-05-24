import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../store/actions';

const Home = ({history}) => {

  const [error, setError]= useState('');
  const counter = useSelector(state => state.counter);


  const taskList = ['1','2','3.1','3.2','4.1', '4.2','4.3','5.1','5.2','6'];
  
  const handleDoTask = (id) =>{
    console.log(!counter.includes === '3.1');
    console.log(!counter.includes === '3.1' && id === '3.2');

    console.log('hace', id);
    if(counter.length=== 0 && id != '1'){
      setError('debe empezar por el 1');
      return
    }
    if(!counter.includes('3.1') && id === '3.2'){
      setError(`debe hacer primero 3.1 `);
      return
    }
    if(!counter.includes('3.2') && id === '4.1'){
      setError(`debe hacer primero 3.2 `);
      return
    }
    if(!counter.includes('5.1') && id === '5.2'){
      setError(`debe hacer primero 5.1 `);
      return
    }
    history.push( `task/${id}`);
  };

  return (

  <div>
    <h2>Home task</h2>
    {error}
    {counter}
    { taskList.map((idTask)=>(
      <> 
      {counter.includes(idTask)?
      `tarea ${idTask} realizada`
      :(<button onClick={()=>{handleDoTask(idTask)}}>hacer tarea # {idTask}</button>)  
      }      
      </>
    )
    )}

    <button onClick={()=>{handleDoTask(55)}}>control</button>

  </div>
)};

export default Home;
