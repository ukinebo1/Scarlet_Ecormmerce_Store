import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      {/* <div className="footer-content"> */}
        <div className="footer-right">
          <h3>The Scarlet Store</h3>
          <p>The scarlet store is your one stop shop for classic ladies wears like croptops, bodycon tops and trousers.</p>
          <div className="footer-socials">
          <i class='bx bxl-twitter'></i>
          <i class='bx bxl-linkedin'></i>
          <i class='bx bxl-facebook' ></i>
          <i class='bx bxl-instagram'></i>
          </div>
        </div>
        <div className="footer-left">
          <h3>Reach us</h3>
          <p><i class='bx bx-envelope'></i> <span> info@lilarit.com</span></p>
          <p><i class='bx bxs-phone'></i> <span>+2348123854390</span></p>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Footer