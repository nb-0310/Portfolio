import React from 'react'
import './Projects.css'
import Netflix from '../../Assets/netflix.png'
import Planit from '../../Assets/planit.png'
import Pathfinding from '../../Assets/pathfinding.png'
import Sorting from '../../Assets/sorting.png'
import Weather from '../../Assets/weather.png'
import { FiExternalLink } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'

const Projects = () => {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <ul>
                <li className="projects-item">
                    <div className="project-img">
                        <div className='img-overlay'>
                            <div className="overlay-icons">
                                <a href="https://github.com/nb-0310/netflix-clone" target='__blank'>
                                    <BsGithub className='overlay-icon' />
                                </a>
                                <a href="#" target='__blank'>
                                    <FiExternalLink className='overlay-icon' />
                                </a>
                            </div>
                        </div>
                        <img src={Netflix} />
                    </div>

                    <div className="projects-desc">
                        <h1>
                            Netflix Clone
                        </h1>
                        <span>React, Tailwind, Firebase</span>
                    </div>
                </li>

                <li className="projects-item">
                    <div className="project-img">
                        <div className='img-overlay'>
                            <div className="overlay-icons">
                                <a href="https://github.com/nb-0310/planit" target='__blank'>
                                    <BsGithub className='overlay-icon' />
                                </a>
                                <a href="https://planit-meetings.netlify.app/" target='__blank'>
                                    <FiExternalLink className='overlay-icon' />
                                </a>
                            </div>
                        </div>
                        <img src={Planit} />
                    </div>

                    <div className="projects-desc">
                        <h1>
                            PlanIt
                        </h1>
                        <span>React, Tailwind, Material UI</span>
                    </div>
                </li>

                <li className="projects-item">
                    <div className="project-img">
                        <div className='img-overlay'>
                            <div className="overlay-icons">
                                <a href="https://github.com/nb-0310/Pathfinding-Visualizer" target='__blank'>
                                    <BsGithub className='overlay-icon' />
                                </a>
                                <a href="https://nb-0310.github.io/Pathfinding-Visualizer/" target='__blank'>
                                    <FiExternalLink className='overlay-icon' />
                                </a>
                            </div>
                        </div>
                        <img src={Pathfinding} />
                    </div>

                    <div className="projects-desc">
                        <h1>
                            Pathfinding Visualizer
                        </h1>
                        <span>HTML, CSS, Javascript</span>
                    </div>
                </li>

                <li className="projects-item">
                    <div className="project-img">
                        <div className='img-overlay'>
                            <div className="overlay-icons">
                                <a href="https://github.com/nb-0310/Sorting-Visualizer" target='__blank'>
                                    <BsGithub className='overlay-icon' />
                                </a>
                                <a href="https://nb-0310.github.io/Sorting-Visualizer/" target='__blank'>
                                    <FiExternalLink className='overlay-icon' />
                                </a>
                            </div>
                        </div>
                        <img src={Sorting} />
                    </div>

                    <div className="projects-desc">
                        <h1>
                            Sorting Visualizer
                        </h1>
                        <span>HTML, CSS, Javascript</span>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Projects