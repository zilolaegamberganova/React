import { use, useRef } from "react";


const AuthForm = () => {
const emailRef=useRef();
const passRef=useRef();
const nameRef=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(emailRef.current.value&&passRef.current.value&&nameRef.current.value)
            {
                console.log("test");

        }
        else {
            alert("Fill all fields")
        }
    };
  return (
    <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col gap-5 p-10 bg-yellow-50"> 
            <input  
            className="border " 
            type='text'
             required 
             placeholder='Enter your Email' 
             ref={emailRef}
             />
            <input 
             className="border"
             type='password' 
             required 
             placeholder='Enter your Password' 
             ref={passRef}
             />
            <input 
             className="border"
              type='text' 
              required 
              placeholder='Enter your Username' 
              ref={useRef}
              />
            <button className='bg-red-300'>Submit</button>
          </form>
  )
}

export default AuthForm
