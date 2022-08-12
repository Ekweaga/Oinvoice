import React from 'react'
import "./maindetails.css"

function MainDetails({name,address}) {
  return (
    <section className="maindetails">
    <h2>{name}</h2>
    <p>{address}</p>
</section>
  )
}

export default MainDetails