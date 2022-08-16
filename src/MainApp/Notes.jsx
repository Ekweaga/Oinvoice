import React from 'react'

function Notes({note}) {
  return (
    <section style={{maxWidth:'300px'}}>
    {/*textarea*/}
    <div style={{width:'300px'}}>

   
    <p>Additional Notes</p>
    <div style={{width:'300px'}} ><p >{note}</p></div>
    </div>
</section>
  )
}

export default Notes