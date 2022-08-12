import React from 'react'
import "./header.css"

function Header() {
  return (
    <header className="Mainappheader">
            <div>
                <h2>O'invoice</h2>
            </div>

            <div>
                <ul>
                    <li><button>Print</button></li>
                    <li><button>Download</button></li>
                    <li><button>Send</button></li>
                </ul>
            </div>
        </header>
  )
}

export default Header