import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {ImGithub} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/jypara-abdy/" target="_blank"><GrLinkedin/></a>
        <a href="https://gihub.com/jypara-git" target="_blank"><ImGithub/></a>
    </div>
  )
}

export default HeaderSocials