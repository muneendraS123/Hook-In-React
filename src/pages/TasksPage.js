import React from "react";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import {Link} from "react-router-dom";

const TaskComp = () => {
  return (
    <div>
      <p>task Comp component</p>
    
<AddTodo/>
<VisibleTodoList/>
<Link to="/">
<button>Logout</button>
      </Link>
    </div>
    
  ); 
};

export default TaskComp;
