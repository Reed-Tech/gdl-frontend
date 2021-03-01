import React from 'react'
import { FaInbox, FaInstagram, FaLinkedin,  FaPhoneAlt } from 'react-icons/fa'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa/index.esm'



const FooterSocialLinks = (props) => {
    return (
            <ul className={props.customClass? props.customClass : 'HeaderSocialLinks'}>
                <li><a href="https://www.facebook.com/GDLAssetManagement"> <FaFacebookF title="Facebook" size="16px" /> </a></li>
                <li><a href="https://twitter.com/gdl_nigeria?s=08"> <FaTwitter title="Twitter" size="16px"/> </a></li>
                <li><a href="https://www.youtube.com/channel/UC8hKfXLTtoyqHhnL1qEwNBQ"> <FaYoutube title="Youtube" size="16px" /> </a></li>
                <li><a href="https://www.instagram.com/gdl_nigeria/?igshid=db676hd70sc4"> <FaInstagram title="Instagram" size="16px"  /> </a></li>
                <li><a href="mailto:customerservice@gdl.com.ng"> <FaInbox title="Mail" size="16px" /> </a></li>
                <li><a href="https://www.linkedin.com/company/gdl-nigeria/"> <FaLinkedin title="LinkedIn" size="16px" /> </a></li>
                <li><a href="tel:+234 (0) 705 443 5000"> <FaPhoneAlt title="Phone" size="16px" /> </a></li>
                
            </ul>
  
    )
}

export default FooterSocialLinks
