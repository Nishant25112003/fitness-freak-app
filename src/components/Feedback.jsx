import '../assets/styles/feedback.css';
import star from '../assets/images/star.png'
import avatar1 from '../assets/images/avatar1.png'


function Feedback() {
  return (
    <div className='feedback'>
        <h1 className='feedback-heading'>
           Client's Feedback
         </h1>
        <div className='main-feedback'>
         <div className="feedback-content">
         
          <div className='services-card'>
            <p>Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re</p>
            <div className='rating'><img src={star}/>
            <img src={star}/>
           <img src={star}/>
           <img src={star}/><img src={star}/></div>
            <div className='profile'><img src= {avatar1}/><p>Thomas Diwakar</p></div>
          </div>
        </div>
         <div className="feedback-content">
            <div className='services-card'>
            <p>Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re</p>
            <div className='rating'><img src={star}/>
            <img src={star}/>
           <img src={star}/>
           <img src={star}/><img src={star}/></div>
            <div className='profile'><img src= {avatar1}/><p>Thomas Diwakar</p></div>
          </div>
        </div>
         <div className="feedback-content">
            <div className='services-card'>
            <p>Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re</p>
            <div className='rating'><img src={star}/>
            <img src={star}/>
           <img src={star}/>
           <img src={star}/><img src={star}/></div>
            <div className='profile'><img src= {avatar1}/><p>Thomas Diwakar</p></div>
          </div>
        </div>
        </div>
 
    </div>
  );
}

export default Feedback;
