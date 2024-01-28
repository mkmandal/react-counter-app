import { useState } from 'react'
import  "./index.css"
import Header from './e-cart-components/Header';
import BgChangerApp from './e-cart-components/BackgroundChange';

function App() {
  
  const [count, setCount] = useState(0)
  const [msg,setMsg]=useState("");

  return (
    <>
    <Header/>
    
    <h3 className='my-2 bg-blue-200 text-black font-bold '>Counter App</h3>
      <button className='bg-indigo-500'>Counter is %:  {count}</button>
      <div className='font-bold text-blue-900'>{msg}</div>
      <div className="card">
          <button className='bg-orange-400 my-1 mx-1' onClick={() => {
            if(count>=20){
              setMsg("Count Exceeded !!")
              return;
             }
           setCount((count) => count + 1)
           setMsg("")
           
        
        }}>
          Increase Count 
        </button>

        <button className='bg-green-400 my-1' onClick={() => {
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

    

      <h3 className='bg-blue-200 text-black font-bold'>Background Change App</h3>
      <BgChangerApp/>
     
    </>
  )
}

export default App
