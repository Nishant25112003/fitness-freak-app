import '../assets/styles/classes.css';
import yoga  from '../assets/images/yoga.png';
import members from '../assets/images/members.png'
import clock from '../assets/images/clock.png'

function Classes() {
  return (
    <>
      <div className='classes'>
        <h1>Classes</h1>
        <div className="cards-div">
          <div className="card">
            <img className='foreground-image' src={yoga} alt='Yoga Class' />
            <div className="type-students">
              <li>Yoga</li>
              <li className='students-li'><img src={members}/>29 students</li>
            </div>
            <div className="heading-time">
              <h3>Strength & Sweat</h3>
              <li className='students-li'> <img src={clock}/>2 H</li>

            </div>
            <p className='instructor-name'>Instructor name: Nishant Narang</p>

            <ul className='info'>
              <li>No. of classes: 30</li>
              <li>Difficulty: Beginner</li>
            </ul>
            <div className='btns'>
              <button className='learn-more'>Learn more</button>
              <button className='start-free'>Start free trial</button>
            </div>
          </div>
          <div className="card">
            <img className='foreground-image' src={yoga} alt='Yoga Class' />
            <div className="type-students">
              <li>Yoga</li>
              <li className='students-li'><img src={members}/>29 students</li>
            </div>
            <div className="heading-time">
              <h3>Strength & Sweat</h3>
              <li className='students-li'> <img src={clock}/>2 H</li>

            </div>
            <p className='instructor-name'>Instructor name: Nishant Narang</p>

            <ul className='info'>
              <li>No. of classes: 30</li>
              <li>Difficulty: Beginner</li>
            </ul>
            <div className='btns'>
              <button className='learn-more'>Learn more</button>
              <button className='start-free'>Start free trial</button>
            </div>
          </div>
          <div className="card">
            <img className='foreground-image' src={yoga} alt='Yoga Class' />
            <div className="type-students">
              <li>Yoga</li>
              <li className='students-li'><img src={members}/>29 students</li>
            </div>
            <div className="heading-time">
              <h3>Strength & Sweat</h3>
              <li className='students-li'> <img src={clock}/>2 H</li>

            </div>
            <p className='instructor-name'>Instructor name: Nishant Narang</p>

            <ul className='info'>
              <li>No. of classes: 30</li>
              <li>Difficulty: Beginner</li>
            </ul>
            <div className='btns'>
              <button className='learn-more'>Learn more</button>
              <button className='start-free'>Start free trial</button>
            </div>
          </div>
        </div>
        <button className='see-more'>See more</button>
      </div>
    </>
  );
}

export default Classes;