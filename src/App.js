import { useState } from "react";
import { users } from "./data";
import { Button } from "./components/All/button";
import { Button2 } from "./components/All2/button2";
import { Button3 } from "./components/All3/button3";
import './App.css';

function App() {
  const [age, setAge] = useState("")  

  const renderUser = () => {
    switch (age) {
      case "TEENAGERS":
        return <Button />
      case "YOUTH":
        return <Button2 />
      case "ADULTS":
        return <Button3 />
    }
  }
  return (
    <div className="App">
      <div className="btns-group">
         <button className="btn1" onClick={()=> setAge("TEENAGERS")}>-18</button>
         <button className="btn2" onClick={()=> setAge("YOUTH")}>18-24</button>
         <button className="btn3" onClick={()=> setAge("ADULTS")}>24+</button>
      </div>

      <div className="container">
        {renderUser()}
      </div>
    </div>
  );
}

export default App;
