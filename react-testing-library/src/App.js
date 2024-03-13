import './App.css';
import {useEffect, useState} from "react";
import {Users} from "./users/Users";

function App() {
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [value, setValue] = useState("")

    const onClick = () => setToggle((prevState) => !prevState)

    useEffect(() => {
        setTimeout(() => {
            setData({})
        }, 1000)
    }, []);

  return (
    <div>
        <h1 data-testid="value-elem">{value}</h1>
        {toggle && <div data-testid="toggle-elem">toggle</div>}
        {data && <div style={{color: "red"}}>data</div>}
      <h1>Hello world</h1>
      <button onClick={onClick} data-testid="toggle-btn">Click me</button>
      <input onChange={(event) => setValue(event.target.value)}
             type="text"
             placeholder="input value"/>
        <Users/>
    </div>
  );
}

export default App;
