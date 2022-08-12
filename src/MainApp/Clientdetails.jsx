import React from 'react'
import "./clientdetails.css"

function Clientdetails({clientname,clientaddress}) {
  return (
    <section className="clientdetails">
    <h2>{clientname}</h2>
    <p>{clientaddress}</p>
   </section>
  )
}

export default Clientdetails