import React from 'react'
import Logo from '../assets/logo.png'
import Palette from '../assets/palette.png'

const Navigation = () => {
  return (
    <nav className='border border-red-900 flex justify-evenly'>
        {/* <img src={Palette} alt="" /> */}
        <img src={Logo}  width={80} className='cursor-pointer border-red-900' alt="logo" />
        <ul className='flex text-white justify-center p-5 my-3 font-semibold text-sm'>
            <li className='mx-8 hover:text-highlight'>HOME</li>
            <li className='mx-8 hover:text-highlight'>ABOUT ME</li>
            <li className='mx-8 hover:text-highlight'>SKILLS</li>
            <li className='mx-8 hover:text-highlight'>PORTFOLIO</li>
            <li className='mx-8 hover:text-highlight'>SERVICES</li>
            <li className='mx-8 hover:text-highlight'>CONTACT</li>
        </ul>
    </nav>
  )
}

export default Navigation