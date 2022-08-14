import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import './home.css'
import imginvoice from './assets/invoice.jpg'
import genuis from "./assets/autogenius.png"
import cleaneat from "./assets/cleaneat.png"
import print from "./assets/printhouse.png"
import naija from "./assets/naijacarshop.png"
import lead from "./assets/sheleadsafrica.png"
import  img from "./assets/img.jpg"
import  ab from "./assets/ab1.jpg"
import  con from "./assets/cons.jpeg"
import Footer from './components/Footer'
import {Link} from "react-router-dom"
import {AiOutlineFieldTime} from 'react-icons/ai'
import {TbBrandProducthunt} from 'react-icons/tb'
import {GiFlatPlatform} from 'react-icons/gi'


function Home() {
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
          setLoading(false)
        },2000)
        
      })
  return (
    <>
     {loading ? <div className="gifloader"><div className="spinner-border text-info " role="status"></div></div>:
    (<><div className='header'>
        
        <Navbar/>
       

        <div className='headerContainer '>
            <div className='headertitle'>
                <div>
                    <h1>Send online invoices to different clients and customers</h1>
                </div>
                <div><p>Professional and Easy-to-use Online Invoicing Software for Startups, Business Owners and Freelancers.
                    </p></div>

                    <div className='headerbtn'><button>
                    <Link to="/signup" style={{color:'white',textDecoration:'none'}}>
                    Create Free Account</Link>
                        </button></div>
            </div>


            <div className="headerimg">
                        <div>
                            <img src={imginvoice} alt="imgvoice"/>
                        </div>
            </div>
        </div>
     
    </div>


    <div className="benefitsContainer">
        <div className='benefits'>
            <div>
                <div style={{display:'flex'}}><AiOutlineFieldTime width="50px"/>  <h3>Save more time</h3></div>
              
                <p>Make getting paid a breeze. Our solution helps you save time on chasing payments and helps you get paid faster.

                </p>
            </div>
            <div>
            <div style={{display:'flex'}}><TbBrandProducthunt/><h3>Enhance productivity</h3></div>
            
            <p>Set up automatic payment reminders to gently remind clients when a payment is coming up, due, or late.</p>
            </div>
            <div>
                 <div style={{display:'flex'}}><GiFlatPlatform/><h3>Easy to Use</h3></div>
            
            <p>Set up automatic payment reminders to gently remind clients when a payment is coming up, due, or late.</p>
            </div>
        </div>

    </div>

    <div className="business">
        <h1>Why Use O'invoice ? </h1>
        <div className="businessContainer">
            <div className="b1">
                <img src={ab} alt="imgs"/>
                <div className="b1title">
                    <div style={{width:'250px'}}><h2>Small Businesses</h2>
                <p>Businesses that adopts online invoicing gets paid 3X faster than those that don't.</p></div>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <button className="bbtn" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Link to="/login" style={{color:'white',textDecoration:'none'}}>
                    Join Us</Link></button></div>

                </div>

            </div>

            <div className="b2">
            <img src={con} alt="imgs"/>
                <div className="b1title">
                    <div style={{width:'250px'}}><h2>Large Firms</h2>
                <p>Quickly and easily bill Clients for on-going or completed projects and get paid faster.</p></div>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <button className="bbtn" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Link to="/login" style={{color:'white',textDecoration:'none'}}>
                    Join Us</Link></button>
                    </div>

                </div>
                    </div>
        <div className="b3">
        <img src={img} alt="imgs"/>
                <div className="b1title">
                    <div style={{width:'250px'}}><h2>Freelance</h2>
                <p>Online invoicing solution that can easily be connected with your website or app.</p></div>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <button className="bbtn" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Link to="/login" style={{color:'white',textDecoration:'none'}}>
                    Join Us</Link></button></div>

                </div>

        </div>
        </div>
    </div>



    <div className='workContainer'>
        <div className='does'>
            <h1>How Does O'invoice Work?</h1>
            <p>Create professional online invoices, send to client </p>
        </div>
        <div className='works'>
            <div className='work1'>
                <h3>Create Invoice</h3>
                <p>It's time to #GOPAPERLESS! Say goodbye to paper invoices. Invoice allows you to create beautifully customised invoices online for free.

                </p>
            </div>
            <div className='work2'>
            <h3>Send to Client</h3>
                <p>Send invoice to clients via E-mail . Your clients can view invoices instantly and pay online from anywhere. It’s easy invoicing.
                </p>
            </div>
            <div className='work3'>
            <h3>Get Paid Faster</h3>
                <p>Don’t ever wait for cheque or bank payments again. Get paid faster by sending an invoice to your client once the job is done.
                    
                </p>
            </div>
            
        </div>
    </div>



        <div className='customersContainer'>
            <div>
                <h1> Join Over 50+ Happy Customers</h1>
                <p>Join other businesses that are creating and sending professional invoices to customers online.</p>
            </div>
            <div className="customers">
                <div><img src={genuis} alt="img"/></div>
                <div><img src={cleaneat} alt="img"/></div>
                  <div><img src={naija} alt="img"/></div>
                  <div><img src={print} alt="img"/></div>
                  <div><img src={genuis} alt="img"/></div>
                  <div><img src={lead} alt="img"/> </div>
            </div>
            <br/>
            <div><button style={{width:'200px'}}>Get Started Now</button></div>
        </div>

    <div className='signupContainer'>
        <h5>Sign up for free today, no credit card required.</h5>
        <p>Send your first invoice right now (it's free!)</p>
        <div className='btn'><button>Generate Invoice</button></div>

    </div>
    <div style={{backgroundColor:'#10374A',paddingTop:'20px'}}>
        <Footer/>
    </div></>
    )
    }

    </>
  )
}

export default Home
