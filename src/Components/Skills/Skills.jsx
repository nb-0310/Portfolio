import React from 'react'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3Full } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { FaSass } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'
import { SiFirebase } from 'react-icons/si'
import { DiResponsive } from 'react-icons/di'
import './Skills.css'

const Skills = () => {
    return (
        <section className='skills'>
            <h1>SKILLS</h1>
            <div className='skills-container'>
                <div className='skill'>
                    <AiOutlineHtml5 className='skill-icon' />
                    <div className='tooltip'>HTML</div>
                </div>

                <div className='skill'>
                    <DiCss3Full className='skill-icon' />
                    <div className='tooltip'>CSS</div>
                </div>

                <div className='skill'>
                    <DiJavascript1 className='skill-icon' />
                    <div className='tooltip'>Javascript</div>
                </div>

                <div className='skill'>
                    <FaReact className='skill-icon' />
                    <div className='tooltip'>React</div>
                </div>

                <div className='skill'>
                    <FaSass className='skill-icon' />
                    <div className='tooltip'>Sass</div>
                </div>

                <div className='skill'>
                    <SiTailwindcss className='skill-icon' />
                    <div className='tooltip'>Tailwind</div>
                </div>

                <div className='skill'>
                    <SiRedux className='skill-icon' />
                    <div className='tooltip'>Redux</div>

                </div>

                <div className='skill'>
                    <SiFirebase className='skill-icon' />
                    <div className='tooltip'>Firebase</div>
                </div>

                <div className='skill'>
                    <DiResponsive className='skill-icon' />
                    <div className='tooltip'>Responsive design</div>
                </div>
            </div>
        </section>
    )
}

export default Skills