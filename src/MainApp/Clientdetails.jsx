import React from 'react'
import "./clientdetails.css"

function Clientdetails({clientname,clientaddress}) {
  return (
    <section className="clientdetails">
      <span><b>Customer :</b></span>
    <h2>{clientname}</h2>
    <p>{clientaddress}</p>
   </section>
  )
}

export default Clientdetails