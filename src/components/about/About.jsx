import React from 'react'
import './about.css'
import ME from '../../assets/mypp.JPG'
import {FaAward} from'react-icons/fa'
import {FiUsers} from'react-icons/fi'
import {VscFolderLibrary} from'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Fresher</h5>
            </article>

            {/* <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>
          <p>
          I am a fourth-year B.Tech student currently studying at IIIT Surat. My journey in programming has been fueled by a strong foundation in C++ and a genuine love for problem-solving. Through perseverance and dedication, I've solved over 1000 Data Structures and Algorithms problems across various platforms. Alongside my academic pursuits, I've had the opportunity to work on personal full-stack projects. As I approach the completion of my degree, I am humbly seeking new opportunities to contribute my skills and grow in the dynamic world of technology. I'm excited to embrace challenges and make a positive impact through my work.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about