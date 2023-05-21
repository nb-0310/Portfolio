import React from 'react'
import Avatar from '../../Assets/Avatar.png'
import vector1 from '../../Assets/vector1.svg'
import './Hero.css'

const Hero = () => {
    return (
        <section class="hero">
            <div class="hero-text">
                <h1 class="hero-heading">Nice to meet you! I'm <span id='name'>
                    Nirzar Bhatt
                </span>
                </h1>
                <p class="hero-desc">
                    <img src={vector1} />
                    Based in India, I'm a Fullstack developer passionate about building accessible apps that users
                    love.
                </p>
            </div>

            <div className='img-container'>
                <div className='circle'>
                    <img src={Avatar} class="hero-img" />
                </div>
            </div>
        </section>
    )
}

export default Hero