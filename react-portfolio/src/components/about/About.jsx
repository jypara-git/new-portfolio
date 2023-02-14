import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Nobis sit aperiam velit at! Excepturi fugiat laboriosam aut aliquid dignissimos accusamus nihil cumque recusandae voluptas 
            molestiae quae quaerat, dolore neque nulla deserunt! Ullam ipsa consequuntur, officiis suscipit rem minus voluptatum sunt obcaecati quibusdam eligendi dicta corporis minima. 
            Amet, animi. Reprehenderit, optio.
          </p>
          <a href='#contact' className='button button-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About