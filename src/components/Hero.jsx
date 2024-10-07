// src/components/Hero.js
import '../assets/styles/hero.css';
import Services from './Services';
import Feedback from './Feedback';
import Trainers from './Trainers';

function Hero() {
  return (
    <div className='hero-Section'>
      <div className='bg-image'>
        <div className="content">
          <h1 className='main-heading'>
            <span id='xyz'>Unleash</span> your Inner Athlete
          </h1>
          <p className='para'>
            Get ready to sweat it out and achieve your fitness goals with our high-energy fitness classes! Our classes are designed to cater to all fitness levels and provide a fun and motivating environment to help you reach your peak performance.
          </p>
          <button className="free-trial">Start Free Trial</button>
        </div>
      </div>
      <Services /> 
      <Feedback/>
      <Trainers/>
      
    </div>
  );
}

export default Hero;
