
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[count,setCount] = useState(0);
  const countClick = () =>{
    setCount(count + 1);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <button onClick={countClick}/>
        <p>Button clicked {count} times</p>
        
    </div>
  )
}

export default App
