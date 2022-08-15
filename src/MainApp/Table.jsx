import React from 'react'

function Table({amount,price,desc,quantity,list}) {
  return (
   <> <div>  
    <table width="100%">
    <thead style={{backgroundColor:'black',color:'white',padding:'10px'}}>
        <tr>
            <td>Description</td>
            <td>Qunatity</td>
            <td>Price</td>
            <td>Amount</td>
        </tr>
    </thead>
    {list.map(({id,desc,quantity,price,amount})=>{
    return(  <>
       
   

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
    <div>
    <section style={{fontWeight:'700'}}>
    Total Price: {list.reduce(
                (price,item) => price + item.quantity *  item.price  , 0
            )}
    </section>
   </div>
   </>
  )
}

export default Table