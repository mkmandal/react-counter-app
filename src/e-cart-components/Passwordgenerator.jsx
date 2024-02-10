import { useEffect, useState , useCallback, useRef} from "react";

const PasswordGenerator = () => {
    
    const [length, setLength] = useState(8)
    const [Password,setPassword]=useState("");
    const [isNumAllowed,setisNumAllowed]=useState(false);
    const [isSpecialCharAllowed,setIsSpecialCharAllowed]=useState(false);
    const alphabates="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const number="1234567890";
    const specialChar="!@#$%^&*-_+=[]{}~`";

   
    //useRef hook
  const passwordRef = useRef(null)
   
    const generatePassword = useCallback(()=>{
        var pass="";
        let str=alphabates;
        if (isNumAllowed){
            str += number;} 
        if (isSpecialCharAllowed){ 
            str += specialChar;}
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
         }
         setPassword(pass);
         console.log(pass)
       }, [isNumAllowed, isSpecialCharAllowed, length,setPassword])

       const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 999);
        window.navigator.clipboard.writeText(Password)
      }, [Password])
       
    useEffect(() => {
        generatePassword()
      }, [generatePassword, isNumAllowed, isSpecialCharAllowed,length,])

    return(
        <div className="w-100">
          <h3 className="my-2 bg-blue-200 text-black font-bold pb-4" >Password Generator</h3>
           
        
    <div className="md:w-1/3">
    </div>
    <div className="md:w-2/3">
    <div className="flex items-center border-b border-teal-500 py-2">
    <input className="border-t-4 border-indigo-500" type="text" placeholder="Jane Doe" aria-label="Full name" value={Password} readOnly></input>
    <button className='outline-none bg-blue-700 text-slate-950 px-3 py-0.5 shrink-0' type="button" onClick={copyPasswordToClipboard}>
      Copy
    </button>
   
  </div>
  <div  className="flex">
    <span className="mr-2 pr-2">
    <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
          <input type="checkbox" defaultChecked={isSpecialCharAllowed} onClick={()=>{
          
         setIsSpecialCharAllowed((state) => !state)
         }
        }></input>
        <label>Add Char</label>
    </span>
    <span className="ml-2 pl-2">
      <input type="checkbox" defaultChecked={isNumAllowed} onClick={
        ()=>{
            
            setisNumAllowed((state) => !state)
         }
      }></input>
        <label className="ml-2 pl-2">Add Number</label>
    </span>

  </div>
  
    </div>
  </div>
    )


}

export default PasswordGenerator;