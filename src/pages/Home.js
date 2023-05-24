import React, {useState} from 'react';
import { useSelector} from 'react-redux';

const Home = ({history}) => {

  const [error, setError]= useState('');
  const task = useSelector(state => state.task);


  const taskList = ['1','2','3.1','3.2','4.1', '4.2','4.3','5.1','5.2','6'];
  const taskCategories =['1', '2', '3', '4', '5', '6'];
  
  const handleDoTask = (id) =>{
    if(task.length=== 0 && id != '1'){
      setError('¡Realice primero la tarea #1!');
      return
    }
    if(!task.includes('3.1') && id === '3.2'){
      setError(`¡Realice primero la tarea #3.1!`);
      return
    }
    if(!task.includes('3.2') && id === '4.1'){
      setError(`¡Realice primero la tarea #3.2!`);
      return
    }
    if(!task.includes('5.1') && id === '5.2'){
      setError(`¡Realice primero la tarea #5.1!`);
      return
    }
    history.push( `task/${id}`);
  };

  return (

  <div>
    {error && 
      <div className='textError'>
        <p>{error}</p>
     </div>}
    <div className='categories'>
    {taskCategories.map( idCategory=>(
      <div key={idCategory} className="card">
        <p className='titleTask'>TAREA #{idCategory}</p>
        <div className='divider'></div>
            { taskList.map((idTask)=>(
              <div key={idTask}>
              {idCategory=== idTask[0] && (
                <>
                {task.includes(idTask)?
                `Tarea #${idTask} finalizada`
                :(<button className={'buttontask'} onClick={()=>{handleDoTask(idTask)}}>Hacer tarea #{idTask}</button>)  
                } 
                </>
              )}    
              </div>
        )
        )}
      </div>
    ))}
    </div>
  </div>
)};

export default Home;
