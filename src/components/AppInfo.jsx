import '../assets/styles/appInfo.css';
import googlePlay from '../assets/images/google-play.png';
import appStore from '../assets/images/appstore.png';
import phone from '../assets/images/download-phone.png';


function AppInfo() {
  return (
    <div className='app-info-section'>
             
    <div className="column1">
        <h1>Download the best Fitness App</h1>
        <p>Start your free trial now...</p>
        <div className='link'>
            <a href=''><img src={googlePlay}/></a>
            <a href=''><img src={appStore}/></a>
        </div>
    </div>
    <div className="column2">
      
            <img src={phone}/>
          
     
    </div>
    </div>
  );
}

export default AppInfo;
