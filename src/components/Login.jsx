import React from 'react'
import "./login.css"

function Login() {
  return (
    <div className="login">
    <div className='contact row'>
    <div className='col-12'><h2>Welcome back</h2>
    <p>Please login to continue</p>
    </div>
    <div className='col-l2'>
    <div className="form-floating mb-3 ">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword">Password</label>
    </div>
    </div>
   
    
    <button  type="button" className="btn  mt-3" style={{width:'100%', background:'#10374A' ,color:'white'}}>
      Login</button>
    
    </div>
    </div>
  )
}

export default Login