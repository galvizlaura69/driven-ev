import React from 'react';

const Task = ({ match }) => {
  const taskId= match.params.taskId;
  return (
   <div>
    <h2>task</h2>
    {taskId}
  </div>
)};

export default Task;
