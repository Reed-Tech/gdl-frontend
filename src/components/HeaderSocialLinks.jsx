import React from 'react'
import YoutubeIcon from '../images/Youtube.svg'
import FacebookIcon from '../images/Facebook.svg'
import TwitterIcon from '../images/Twitter.svg'


const HeaderSocialLinks = () => {
    return (
            <ul style={{background:'grey'}} className='HeaderSocialLinks'>
                <li><a href="facebook"><img src={FacebookIcon} alt="Facebook Link"/></a></li>
                <li><a href="twitter"><img src={TwitterIcon} alt="Twitter Link"/></a></li>
                <li><a href="youtube"><img src={YoutubeIcon} alt="Youtube Link"/></a></li>
            </ul>
  
    )
}

export default HeaderSocialLinks
