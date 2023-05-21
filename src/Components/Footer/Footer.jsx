import React from 'react'
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <div className='footer-box'>
                <div className='contact-text'>
                    <h1>Contact</h1>
                    <p>I would love to hear about your project and how I could be of help. Please fill in the form and I'll get back to you as soon as possible.</p>
                </div>

                <div className='contact-form-container'>
                    <form action="GET" className='contact-form'>
                        <div className='form-field'>
                            <input type="text" id='name' name='name' placeholder='Name' />
                        </div>

                        <div className='form-field'>
                            <input type="email" id='email' name='email' placeholder='Email' />
                        </div>

                        <div className='form-field'>
                            <textarea name="message" id="message" placeholder='Message'></textarea>
                        </div>

                        <button>SEND MESSAGE</button>
                    </form>
                </div>
            </div>

            <div className='foobar'>
                <a href="#" className="footer-home">
                    Nirzar Bhatt
                </a>

                <span class="footer-icons">
                    <a href="https://www.linkedin.com/in/nirzar-bhatt-30a644214/" class="social-links">
                        <BsLinkedin />
                    </a>

                    <a href="https://github.com/nb-0310" class="social-links">
                        <BsGithub />
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer