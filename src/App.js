
import { useState } from 'react';
import './App.css';
import Button from './component/button/Button';
import UserProf from './userProf';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">

      <h1> My Counter value :{counter} </h1>
          <Button text={"Counter"}  background={"skyBlue"}/>
          <Button text={"Increment"} onclick={()=>{setCounter(counter+1)}} background={"green"}/>
          <Button text={"Decrement"} onclick={()=>{setCounter(counter-1)}} background={"blue"}/>
          <Button text={"Reset"} onclick={()=>{setCounter(0)}} background={"cyan"}/>

      <UserProf/>
    </div>
  );
}

export default App;
