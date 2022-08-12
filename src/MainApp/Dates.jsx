import React from 'react'
import "./date.css"

function Dates({date,invoiceno,invoicedate}) {
  return (
    <article>
    <ul>
        <li>
            <span>Invoice number: {invoiceno}</span>
        </li>
        <li>
           <span>Invoice date: {invoicedate}</span> 
            </li>
            <li>
         <span>   Due date: {date}</span>
            </li>
    </ul>
 </article>
  )
}

export default Dates