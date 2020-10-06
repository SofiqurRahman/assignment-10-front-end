import React from 'react';
const Task = ({task}) => {
  
  return (
    <div className="col-md-3">
      <a href="login" style={{textDecoration:"None"}}>
        <img style={{height: '300px',marginRight:"10px"}} src={require(`../../images/${task.pic}`)} alt=""/>
        <h3 class="rounded" style={{backgroundColor:"#7243CF",color:"#fff",padding: "10px 0",marginBottom: "30px"}}>{task.name}</h3>
      </a>
    </div>
  );
};

export default Task;