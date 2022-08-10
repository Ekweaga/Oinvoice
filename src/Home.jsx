import React from 'react'
import Navbar from './components/Navbar'
import './home.css'
import imginvoice from './assets/invoice.jpg'

function Home() {
  return (
    <>
    <div className='header'>
        <div className="menu">
        <Navbar/>
        </div>

        <div className='headerContainer '>
            <div className='headertitle'>
                <div>
                    <h1>Send online invoices to different clients and customers</h1>
                </div>
                <div><p>Professional and Easy-to-use Online Invoicing Software for Startups, Business Owners and Freelancers.
                    </p></div>

                    <div className='headerbtn'><button>Create Free Account</button></div>
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
                <h3>Save more time</h3>
            </div>
            <div>
            <h3>Save more time</h3>
            </div>
            <div>
            <h3>Easy to Use</h3>
            </div>
        </div>

    </div>

    </>
  )
}

export default Home
