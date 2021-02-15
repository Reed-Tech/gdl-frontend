import React from 'react'
// import YoutubeIcon from '../assets/images/Youtube.svg'
import FacebookIcon from '../assets/images/Facebook.svg'
import TwitterIcon from '../assets/images/Twitter.svg'
import {FiInstagram} from 'react-icons/fi/index.esm'


const HeaderSocialLinks = (props) => {
    return (
            <ul className={props.customClass? props.customClass : 'HeaderSocialLinks'}>
                <li><a href="facebook"><img src={FacebookIcon} alt="Facebook Link"/></a></li>
                <li><a href="twitter"><img src={TwitterIcon} alt="Twitter Link"/></a></li>
                {/* <li><a href="youtube"><img src={YoutubeIcon} alt="Youtube Link"/></a></li> */}
                <li><a href="instagram"><FiInstagram  size={'20px'} color={"white"} /> </a></li>
            </ul>
  
    )
}

export default HeaderSocialLinks
