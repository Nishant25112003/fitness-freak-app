import '../assets/styles/services.css';
import '../assets/styles/trainers.css';
import rec1 from "../assets/images/rec1.png"; // Adjust the path as per your file structure
import rec2 from "../assets/images/rec2.png"; // Adjust the path as per your file structure
import Trainer1 from "../assets/images/trainer1.png"; // Adjust the path as per your file structure
import Trainer2 from "../assets/images/trainer2.png"; // Adjust the path as per your file structure
import Trainer3 from "../assets/images/trainer3.png"; // Adjust the path as per your file structure
import Trainer4 from "../assets/images/trainer4.png"; // Adjust the path as per your file structure



function Trainers() {
  return (
    <div className='services-container'>
      <h2>Instructors</h2>
    <div className='trainers-card'>
      <div className='card'><img className='trainersImg' src={Trainer1}/><h4>Michelle Botwon</h4><p>Yoga Trainer</p></div>
      <div className='card'><img className='trainersImg' src={Trainer2}/><h4>Michelle Botwon</h4><p>Yoga Trainer</p></div>
      <div className='card'><img className='trainersImg' src={Trainer3}/><h4>Michelle Botwon</h4><p>Yoga Trainer</p></div>
      <div className='card'><img className='trainersImg' src={Trainer4}/><h4>Michelle Botwon</h4><p>Yoga Trainer</p></div>
     
       
    </div> 
      <img className="rec1" src={rec1}/>
      <img className="rec2"src={rec2}/>
    </div>
  );
}

export default Trainers;