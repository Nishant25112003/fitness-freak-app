import '../assets/styles/services.css';
import servicesImg from "../assets/images/services.png"; // Adjust the path as per your file structure
import rec1 from "../assets/images/rec1.png"; // Adjust the path as per your file structure
import rec2 from "../assets/images/rec2.png"; // Adjust the path as per your file structure


function Services() {
  return (
    <div className='services-container'>
      <h2>Fit for your lifestyle</h2>
      <p>Wake up with a sunrise meditation, sweat it out with lunchtime HIIT, or unwind with an evening flow. You’ll find movement for every mood with classes sorted by time, style, and skill level.</p>
      <img className='servicesImg' src={servicesImg}/>
      <img className="rec1" src={rec1}/>
      <img className="rec2"src={rec2}/>
    </div>
  );
}

export default Services;