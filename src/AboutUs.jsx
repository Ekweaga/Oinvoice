import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import "./aboutus.css"
import imginvoice from './assets/invoice.jpg'
import genuis from "./assets/autogenius.png"
import cleaneat from "./assets/cleaneat.png"
import print from "./assets/printhouse.png"
import naija from "./assets/naijacarshop.png"
import lead from "./assets/sheleadsafrica.png"


function AboutUs() {
  return (
    <>
      <div>

<Navbar/>
</div>

<div className="AboutusBanner">
  <h1>About Us</h1>
  <p>Invoicing for small business owners to clients, by small business owners</p>

</div>
<div className="Aboutus">
  <div><img src={imginvoice} alt="img"/></div>
  <section>
    <div><p>Since 2021, we’ve been making it easier for small business owners to win more work and get paid. O'Invoice was started by a small business owner who understood the pain of trying to balance the responsibilities of delivering a remarkable product or service to customers, with handling the administration of a business.
       Many of our team have experienced the same.</p></div>

       <div><p>Our mission today is to make it effortless for you to manage your finances and stay organized. So now you can focus on more important things—like delighting your customers
         and getting to bed on time.</p></div>
  </section>
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

<div style={{backgroundColor:'#10374A',paddingTop:'20px'}}>
        <Footer/>
    </div>
    </>
  
  )
}

export default AboutUs
