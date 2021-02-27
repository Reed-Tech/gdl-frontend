import React from 'react'
import YoutubeIcon from '../assets/images/Youtube.svg'
import FacebookIcon from '../assets/images/Facebook.svg'
import TwitterIcon from '../assets/images/Twitter.svg'
import InstagramIcon from '../assets/images/instagram (2).svg'
// import EmailIcon from '../assets/images/email (1).svg'
import LinkedInIcon from '../assets/images/linkedin.svg'
import PhoneIcon from '../assets/images/phone-call (1).svg'



const FooterSocialLinks = (props) => {
    return (
            <ul className={props.customClass? props.customClass : 'HeaderSocialLinks'}>
                <li><a href="https://www.facebook.com/GDLAssetManagement"><img src={FacebookIcon} alt="Facebook Link"/></a></li>
                <li><a href="https://twitter.com/gdl_nigeria?s=08"><img src={TwitterIcon} alt="Twitter Link"/></a></li>
                <li><a href="youtube"><img src={YoutubeIcon} alt="Youtube Link"/></a></li>
                <li><a href="https://www.instagram.com/gdl_nigeria/?igshid=db676hd70sc4"><img src={InstagramIcon} alt="Instagram Link"/></a></li>
                {/* <li><a href="email"><img src={EmailIcon} alt="Email Link"/></a></li> */}
                <li><a href="https://www.linkedin.com/company/gdl-nigeria/"><img src={LinkedInIcon} alt="Linkedin Link"/></a></li>
                <li><a href="tel:+234 (0) 705 443 5000"><img src={PhoneIcon} alt="Phone No"/></a></li>
            </ul>
  
    )
}

export default FooterSocialLinks
