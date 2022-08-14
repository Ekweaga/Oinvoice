import React,{useState} from 'react'
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase';
import {Link,useHistory} from "react-router-dom"

function Signup() {
  const history = useHistory();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [error,seterror] = useState(null)
const [success,setsuccess] = useState(null)


  const signup = async ()=>{
    if(email === "" || pwd === ""){
      seterror("Fields are empty")
    
  
    
    }
    else if(pwd.length < 6){
      seterror("Password characters must be greater than 6")
     
    }
   else{
    try{
      await createUserWithEmailAndPassword(auth,email,pwd).then((response)=>{
        console.log(response.user.refreshToken)
        localStorage.setItem('token', JSON.stringify(response.user.refreshToken))
        
      });
   
     setsuccess("Your Account is created successfully")
    setTimeout(()=>{
      history.replace("/login");
    },1000)
    
   }
   catch(err){
   seterror(err.message)
   console.log(err)
   
   }
  }

  }
  return (
    <div className="login">
    <div className='contact row'>
    <div className='col-12'><h2>Create Account</h2>
    <p>Please create an Account to continue</p>
    </div>
    <div className='col-l2'>
    <div className="form-floating mb-3 ">
      <input type="text" className="form-control" id="floatingInput" placeholder="UserName" value={name} 
      onChange={(e)=>setName(e.target.value)}/>
      <label for="floatingInput">Name</label>
    </div>
    <div className="form-floating mb-3 ">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email}
      onChange={(e)=>setEmail(e.target.value)}/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={pwd}
       onChange={(e)=>setPwd(e.target.value)}/>
      <label for="floatingPassword">Password</label>
    </div>
    </div>
    <div className="accountsignup">
            <span>Already have an account ? <Link to="/login" style={{color:'#10374A',textDecoration:'none'}}>Login</Link></span>
          </div>
    
    <button  type="button" className="btn  mt-3" style={{width:'100%', background:'#10374A' ,color:'white'}} onClick={signup}>
      Submit</button>
<br/>
      <div style={{color:'red'}}>{error?error:null}</div>
      <div style={{color:'green'}}>{success?success:null}</div>
    
    </div>
    </div>
  )

  }

export default Signup