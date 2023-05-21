import React from 'react'
import './Navbar.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Navbar = () => {
    return (
        <nav>
            <a href="#" className="header-home">
                Nirzar Bhatt
            </a>

            <span class="icons">
                <a href="https://www.linkedin.com/in/nirzar-bhatt-30a644214/" id="linkedin" class="icon">
                    <BsLinkedin className='linkedin' />
                </a>

                <a href="https://github.com/nb-0310" class="icon" id="github">
                    <BsGithub className='github' />
                </a>
            </span>
        </nav>
    )
}

export default Navbar