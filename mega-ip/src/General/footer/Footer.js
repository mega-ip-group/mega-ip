import React from 'react'
import "./FooterC1.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <div className='all'>
       
      <div className = 'FooterAll'>

        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4">0</div>

        </div>
        

        <ul id='cocial_icon'>
          <li><a><FacebookIcon className='Facebook'/></a></li>
          <li><a><PhoneIcon/></a></li>
          <li><a> <MailIcon/></a></li>
          <li><a><WhatsAppIcon/></a></li>
        </ul>

        <ul className="menu">
         <li><a id='menu1'>Home</a></li>
         <li><a id='menu2'>About</a></li>
         <li><a id='menu3'>Contact</a></li>
         <li><a id='menu4'>Home</a></li>

         </ul>
         <p>
          @this is a web page on 9/2022
         </p>
        
      </div>

    </div>

    
  )

}

export default Footer
