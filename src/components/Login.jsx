import React,{useState,useEffect} from 'react'
import "./login.css"
import {Link,useHistory} from "react-router-dom"
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase';


function Login() {
  const history = useHistory();
  const [loading,setLoading] = useState(true)
  const [email, setemail] = useState("")
  const [password,setpassword] = useState("")
  const [error,seterror] = useState(null)


  const login = async ()=>{
    if(email === "" || !password === "" ){
      seterror("Fields are empty")
    
    }

   else{
    try{
      await signInWithEmailAndPassword(auth,email,password)

      history.replace("/mainapp")
   
   
     
   }
   catch(err){
     console.log(err)
     seterror(err.message)
     
   }
  }}

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
    
  })
  return (
   
    
    

    <>
    {loading ? <div className="gifloader"><div className="spinner-border text-info " role="status"></div></div>:(
      <div className="login">
        
      <div className='contact row'>
       
        <div className='col-12'><h2>Welcome back</h2>
          <p>Please login to continue</p>
        </div>
        <div className='col-l2'>
          <div className="form-floating mb-3 ">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
            onChange={(e)=>setemail(e.target.value)} value={email}/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
              onChange={(e)=>setpassword(e.target.value)} value={password}/>
            <label for="floatingPassword">Password</label>
          </div>
        </div>
          <div className="accountsignup">
            <span>Don't have an Account ? <Link to="/signup" style={{color:'#10374A',textDecoration:'none'}}>Sign Up</Link></span>
          </div>

        <button type="button" className="btn  mt-3" style={{ width: '100%', background: '#10374A', color: 'white' }} onClick={login}>
          Login</button>
          <br/>
          <div style={{color:'red'}}>{error?error:null}</div>
      </div>
   
    </div>
    )}
    
    </>
  


  )
}

export default Login