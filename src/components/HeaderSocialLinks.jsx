import React from 'react'
import FacebookIcon from '../assets/images/Facebook.svg'
import TwitterIcon from '../assets/images/Twitter.svg'
import {FiInstagram} from 'react-icons/fi/index.esm'


const HeaderSocialLinks = (props) => {
    return (
            <ul className={props.customClass? props.customClass : 'HeaderSocialLinks'}>
                <li><a href="https://www.facebook.com/GDLAssetManagement"><img src={FacebookIcon} alt="Facebook Link"/></a></li>
                <li><a href="https://twitter.com/gdl_nigeria?s=08"><img src={TwitterIcon} alt="Twitter Link"/></a></li>
                <li><a href="https://instagram.com/gdl_nigeria/?igshid=db676hd70sc4"><FiInstagram  size={'20px'} color={"white"} /> </a></li>
            </ul>
  
    )
}

export default HeaderSocialLinks
