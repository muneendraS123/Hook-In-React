//import React from "react";
import LoginComponent from "../pages/LoginPage";
import TaskComp from "../pages/TasksPage";
import {Route} from "react-router-dom"

/*const App = () => (
  <div>
    <Route exact path="/task" component={TaskComp} />
    <Route exact path="/" component={LoginComponent} />
  </div>
);

export default App;*/



import React, { useState, useEffect} from 'react';

function App() {
const [click, setClick] = useState(0);
useEffect(() => console.log(click),[click])
return (
	<div>
	

<p>You've clicked {click} times!</p>


	

<p>The number of times you have clicked
is {click%2==0?'even!':'odd!'}</p>


	<button onClick={() => setClick(click => click + 1)}>
		Click me
	</button>
	</div>
);
}

export default App;

