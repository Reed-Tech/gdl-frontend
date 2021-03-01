import React from 'react'
import YoutubeIcon from '../assets/images/Youtube.svg'
import FacebookIcon from '../assets/images/Facebook.svg'
import TwitterIcon from '../assets/images/Twitter.svg'
import { FaInbox, FaInstagram, FaLinkedin,  FaPhoneAlt } from 'react-icons/fa'



const FooterSocialLinks = (props) => {
    return (
            <ul className={props.customClass? props.customClass : 'HeaderSocialLinks'}>
                <li><a href="https://www.facebook.com/GDLAssetManagement"><img src={FacebookIcon} alt="Facebook Link"/></a></li>
                <li><a href="https://twitter.com/gdl_nigeria?s=08"><img src={TwitterIcon} alt="Twitter Link"/></a></li>
                <li><a href="https://www.youtube.com/channel/UC8hKfXLTtoyqHhnL1qEwNBQ"><img src={YoutubeIcon} alt="Youtube Link"/></a></li>
                <li><a href="https://www.instagram.com/gdl_nigeria/?igshid=db676hd70sc4"> <FaInstagram size="20px"  /> </a></li>
                <li><a href="mailto:customerservice@gdl.com.ng"> <FaInbox size="20px" /> </a></li>
                <li><a href="https://www.linkedin.com/company/gdl-nigeria/"> <FaLinkedin size="20px" /> </a></li>
                <li><a href="tel:+234 (0) 705 443 5000"> <FaPhoneAlt size="20px" /> </a></li>
                
            </ul>
  
    )
}

export default FooterSocialLinks
