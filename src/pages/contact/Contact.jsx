import React from 'react'
import './contact.css'
function Contact() {
  return (
    <div className='contact-page'>
        <div className='contact-form'>
        <h2>Contact Us</h2>
         <form>
          
          <input className='name'  type="text" placeholder="Full Name" required />
          <input className="email" type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
        </div>

        
    </div>
  )
}

export default Contact