import React,{useEffect} from 'react'
import {v4 as uuidv4} from "uuid"

function TableForm({amount,price,quantity,desc,setdescr,setquantity,setamount,setprice,list,setList}) {

const deleteitem = (id)=>{
  setList(list.filter((row)=> row.id !== id))
}
const additem = ()=>{
  const newitem = {
    id:uuidv4(),
    price,
    quantity,
    amount,
    desc
  }
  setList([...list,newitem])
  setamount("")
  setdescr("")
  setquantity('')
  setprice('')
}

const edititem = (id)=>{
const editingitem = list.find((row)=>row.id === id)
setprice(editingitem.price)
setamount(editingitem.amount)
setdescr(editingitem.desc)
setquantity(editingitem.quantity)
setList(list.filter((row)=> row.id !== id))
}

  useEffect(()=>{
    const calculateamount = (amount)=>{
      setamount(quantity * price)
    }
    calculateamount();
  },[amount,price,quantity,setamount])
  
  return (
<>

<div className="form-floating mb-3 col-lg-12">
    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" 
    onChange={(e)=>setdescr(e.target.value)}  value={desc} />
    <label for="floatingInput" className="p-3">Item Description</label>
  </div>
  <div className="form-floating mb-3 col-lg-4">
  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" 
   onChange={(e)=>setquantity(e.target.value)}  value={quantity} />
  <label for="floatingInput" className="p-3">Quantity</label>
</div>
<div className="form-floating mb-3 col-lg-4">
  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" 
  onChange={(e)=>setprice(e.target.value)}  value={price}  />
  <label for="floatingInput" className="p-3">Price</label>
</div>
<div className="form-floating mb-3 col-lg-4">
 <div><bold><span>{amount}</span></bold></div>
</div>
<div className="6">
  <button onClick={additem} style={{width:'150px'}}>Add Item</button>
</div>
<div style={{marginTop:'30px',marginBottom:'30px'}}>
<table width="100%">
<thead>
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
            <td ><button onClick={()=>deleteitem(id)}>Delete</button></td>
            <td ><button onClick={()=>edititem(id)}>Edit</button></td>
        
          
           
        </tr>
    </tbody>


      </>
     )
    })}
   </table>
</div>
</>
  )
}

export default TableForm