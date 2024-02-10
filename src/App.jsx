import { useState } from 'react'
import  "./index.css"
import Header from './e-cart-components/Header';
import BgChangerApp from './e-cart-components/BackgroundChange';
import PasswordGenerator from './e-cart-components/Passwordgenerator';

//import HigherOrderComponent from './e-cart-components/HigherOrderComponent';

function App() {
  
  const [count, setCount] = useState(0)
  const [msg,setMsg]=useState("");
  //const value=true;
  //const promotedComponent = HigherOrderComponent(BgChangerApp);
return (
    <>
    <Header/>
    
    <h3 className='my-2 bg-blue-200 text-black font-bold '>Counter App</h3>
      <button className='bg-indigo-500 text-white'>Counter is %:  {count}</button>
      <div className='font-bold text-red-500'>{msg}</div>
      <div className="card">
          <button className='bg-orange-400 my-1 mx-1 text-white' onClick={() => {
            if(count>=20){
              setMsg("Count Exceeded !!")
              return;
             }
           setCount((count) => count + 1)
           setMsg("")
           
        
        }}>
          Increase Count 
        </button>

        <button className='bg-green-400 my-1 text-white' onClick={() => {
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
      <div className='bg-slate-500 font-bold'>
        <PasswordGenerator/>
      </div>
     <h3 className='bg-blue-200 text-black font-bold my-3'>Background Change App</h3>
     <BgChangerApp />
   </>
    
  )
}

export default App
