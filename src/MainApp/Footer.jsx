import React from 'react'
import "./footer.css"

function Footer({name,accno,phone,bank,email,accname}) {
  return (
    <footer>
    <ul>
      <article className="row">
      <li className="col-lg-6 sm-6"><span>Your name :</span> {name}</li>
        <li className="col-lg-6 sm-6"><span>Your email :</span>{email}</li>
      </article>
      <article className="row">
      <li  className="col-lg-6 sm-6" ><span>Phone number :</span>{phone}</li>
        <li  className="col-lg-6 sm-6"><span>Bank :</span>{bank}</li>
      </article>
      
      <article className="row">
      <li  className="col-lg-6 sm-6"><span>Account number :</span>{accno}</li>
        <li  className="col-lg-6 sm-6"><span>Account name: </span>{accname}</li>
      </article>
       
    </ul>
   </footer>
  )
}

export default Footer