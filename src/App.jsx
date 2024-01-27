import { useState } from 'react'
import  "./index.css"
import Header from './e-cart-components/Header';

function App() {
  
  const [count, setCount] = useState(0)
  const [msg,setMsg]=useState("");

  return (
    <>
    <Header/>
      <h1>Counter App</h1>
      <button>Counter is %:  {count}</button>
      <div className='pd-2 bg-black-400'>{msg}</div>
      <div className="card">
          <button onClick={() => {
            if(count>=20){
              setMsg("Count Exceeded !!")
              return;
             }
           setCount((count) => count + 1)
           setMsg("")
           
        
        }}>
          Increase Count 
        </button>

        <button className='bg-green' onClick={() => {
            setMsg("")
            if(count==0){
             setMsg("Count Cannot Be Negative !!")
              return;
            }
            setCount((count) => count - 1)

          }}>
          Decrease Count
        </button>
      </div>
  
    </>
  )
}

export default App
