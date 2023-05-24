import React, {useState} from 'react';
import { useSelector} from 'react-redux';

const Home = ({history}) => {

  const [error, setError]= useState('');
  const counter = useSelector(state => state.counter);


  const taskList = ['1','2','3.1','3.2','4.1', '4.2','4.3','5.1','5.2','6'];
  const taskCategories =['1', '2', '3', '4', '5', '6'];
  
  const handleDoTask = (id) =>{
    if(counter.length=== 0 && id != '1'){
      setError('Realice primero la tarea #1');
      return
    }
    if(!counter.includes('3.1') && id === '3.2'){
      setError(`Realice primero la tarea #3.1 `);
      return
    }
    if(!counter.includes('3.2') && id === '4.1'){
      setError(`Realice primero la tarea #3.2 `);
      return
    }
    if(!counter.includes('5.1') && id === '5.2'){
      setError(`Realice primero la tarea #5.1 `);
      return
    }
    history.push( `task/${id}`);
  };

  return (

  <div>
    <h1>{error}</h1>
    {taskCategories.map( idCategory=>(
      <div key={idCategory} className='card'>
        <h3>Tarea #{idCategory}</h3>
            { taskList.map((idTask)=>(
              <div key={idTask}>
              {idCategory=== idTask[0] && (
                <>
                {counter.includes(idTask)?
                `tarea ${idTask} realizada`
                :(<button onClick={()=>{handleDoTask(idTask)}}>Hacer tarea #{idTask}</button>)  
                } 
                </>
              )}    
              </div>
        )
        )}
      </div>
    ))}
  
    <button onClick={()=>{handleDoTask(55)}}>control</button>

  </div>
)};

export default Home;
