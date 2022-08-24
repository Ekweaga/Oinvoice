import React,{useState,useEffect} from 'react'
import TableForm from '../components/TableForm'
import Clientdetails from './Clientdetails'
import Dates from './Dates'
import Footer from './Footer'
import Header from './Header'
import "./index.css"
import MainDetails from './MainDetails'
import Notes from './Notes'
import Table from './Table'





function Mainapp() {
            const [showinvoice,setshowinvoice] = useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [address,setAddress] = useState('')
    const [phone,setPhone] = useState('')
    const [bank,setBank] = useState('')
    const [accno,setAccno] = useState('')
    const [accname, setaccname] = useState('')
    const [clientname,setClientname] = useState('')
    const [clientaddress,setClientaddress] = useState('')
    const [invoiceno,setInvoiceno] = useState('')
    const [invoicedate,setInvoiceDate] = useState('')
    const [duedate,setDuedate] = useState('')
    const [note,setNote] = useState('')
    const [description, setDescription] = useState('')
     const [quantity, setQuantity] = useState('')
      const [amount, setAmount] = useState('')
      const [price, setPrice] = useState('')
      const [list, setList] = useState([])


    const [loading,setLoading] = useState(true)
   

   
    const handle = ()=>{
     
        setshowinvoice(!showinvoice)
      
     
    }

    

    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
      },3000)

      
    })

  return (
   <> 
      
    <main>
      {loading ? <div className="gifloader"><div className="spinner-border text-info " role="status"></div></div>: 
        
        
          (<div className="invoiceContainer">
            {showinvoice ? (
          <div className="invoiceBox">
        <div className='invoiceapp' >
      
        {/*header*/}
       <Header/>
           {/* ENd of header*/}

   {/*your details*/}
         <MainDetails name={name} address={address}/>
        
      
        {/*end of your details*/}


           {/*Client details*/}
          <Clientdetails clientname={clientname} clientaddress={clientaddress}/>
              {/*end of client details*/}


                 {/*date*/}
             <Dates date={duedate} invoiceno={invoiceno} invoicedate={invoicedate}/>
                 {/* end date*/}

                 {/*Table*/}
              <Table amount={amount} price={price} desc={description} setamount={setAmount} setprice={setPrice}
    setdescr={setDescription} quantity={quantity} setquantity={setQuantity} list={list}/>
                  {/* end of Table*/}

             
             {/*notes*/}
          <Notes note={note}/>
                   {/*end notes*/}
<hr/>
                       {/*footer*/}
                     <Footer name={name} accno={accno} email={email} bank={bank} phone={phone}/>
                        {/* end footer*/}

                        <div><button  onClick={handle}>Edit Invoice</button></div>
                     
                        </div></div>):
                        (<div className="form">

                          <article className="row">
                          <div className="form-floating mb-3 col-lg-4 sm-12">
      <input type="text" className="form-control " id="floatingInput" placeholder="name@example.com" 
      onChange={(e)=>setName(e.target.value)} value={name}/>
      <label for="floatingInput" className="p-3" >Your Name</label>
    </div>
    <div className="form-floating mb-3 col-lg-4 sm-12">
      <input type="email" className="form-control " id="floatingInput" placeholder="name@example.com"
      onChange={(e)=>setEmail(e.target.value)}  value={email}/>
      <label for="floatingInput" className="p-3"> Your Email address</label>
      </div>
                          <div className="form-floating mb-3 col-lg-4 sm-12">
      <input type="text" className="form-control " id="floatingInput" placeholder="name@example.com" 
      onChange={(e)=>setaccname(e.target.value)} value={accname}/>
      <label for="floatingInput" className="p-3" >Account Name</label>
    </div>
    
                          </article>

                          <article className="row">
                          <div className="form-floating mb-3 col-lg-4 ">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
       onChange={(e)=>setAddress(e.target.value)}  value={address} />
      <label for="floatingInput" className="p-3">Your Address</label>
    </div>
    <div className="form-floating mb-3 col-lg-4">
      <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com"
       onChange={(e)=>setPhone(e.target.value)}  value={phone} />
      <label for="floatingInput" className="p-3">Your Phone no</label>
    </div>
    <div className="form-floating mb-3 col-lg-4">
      <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" 
       onChange={(e)=>setBank(e.target.value)}  value={bank}/>
      <label for="floatingInput" className="p-3">Your Bank Name</label>
    </div>
                          </article>
                       
                    <article className="row">
                    <div className="form-floating mb-3 col-lg-4">
      <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" 
       onChange={(e)=>setAccno(e.target.value)}  value={accno}/>
      <label for="floatingInput" className="p-3">Your Account No</label>
    </div>
    <div className="form-floating mb-3 col-lg-4">
      <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" 
       onChange={(e)=>setClientname(e.target.value)}  value={clientname}/>
      <label for="floatingInput" className="p-3">Client Name</label>
    </div>
    <div className="form-floating mb-3 col-lg-4">
      <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" 
       onChange={(e)=>setClientaddress(e.target.value)}  value={clientaddress}/>
      <label for="floatingInput" className="p-3">Client Address</label>
    </div>
    
                    </article>
                  
   <article className="row">
   <div className="form-floating mb-3 col-lg-4 ">
      <input type="date" className="form-control" id="floatingInput" placeholder="name@example.com" 
       onChange={(e)=>setInvoiceDate(e.target.value)}  value={invoicedate}/>
      <label for="floatingInput" className="p-3">Invoice Date</label>
    </div>
    <div className="form-floating mb-3 col-lg-4">
      <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" 
       onChange={(e)=>setInvoiceno(e.target.value)}  value={invoiceno}/>
      <label for="floatingInput" className="p-3">Invoice No</label>
    </div>
     
    <div className="form-floating mb-3 col-lg-4">
      <input type="date" className="form-control" id="floatingInput" placeholder="name@example.com" 
       onChange={(e)=>setDuedate(e.target.value)}  value={duedate}/>
      <label for="floatingInput" className="p-3">Due Date</label>
    </div>
   </article>

   <article className="row">
    <TableForm amount={amount} price={price} desc={description} setamount={setAmount} setprice={setPrice}
    setdescr={setDescription} quantity={quantity} setquantity={setQuantity} list={list} setList={setList}/>
   </article>

   
  
   <div className="form-floating mb-3 ">
      <textarea  onChange={(e)=>setNote(e.target.value)}  value={note} row="20" placeholder="Additional notes to clients"></textarea>
     
    </div>
   
  
   <button onClick={handle} type="button" className="btn  mt-3" style={{width:'100%', background:'#10374A' ,color:'white',marginTop:'20px',marginBottom:'20px'}}>
      Generate Invoice</button>
   
   
     
    
    
                        </div>)
                        }
                        </div>
      )
      }
    </main>
    </>
  )
}

export default Mainapp