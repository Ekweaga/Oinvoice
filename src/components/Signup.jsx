import React,{useState} from 'react'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
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
   
    
    <button  type="button" className="btn  mt-3" style={{width:'100%', background:'#10374A' ,color:'white'}}>
      Login</button>
    
    </div>
    </div>
  )

  }

export default Signup