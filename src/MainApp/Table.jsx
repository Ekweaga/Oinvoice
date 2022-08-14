import React from 'react'

function Table({amount,price,desc,quantity,list}) {
  return (
    <div>  
    <table width="100%">
    {list.map(({id,desc,quantity,price,amount})=>{
    return(  <>
       
    <thead>
        <tr>
            <td>Description</td>
            <td>Qunatity</td>
            <td>Price</td>
            <td>Amount</td>
        </tr>
    </thead>

    <tbody>
    <tr>
            <td>{desc}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{amount}</td>
        </tr>
    </tbody>


      </>
     )
    })}
   </table></div>
  )
}

export default Table