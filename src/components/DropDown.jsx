import '../assets/styles/hero.css';
import { useState } from 'react';

function DropDown() {


  return (
    <div className='dropdown'>
             <ul className="dropdown-items">
                <a href="" ><li>Yoga</li></a>
                <a href="" ><li>Gym</li></a>
                <a href="" ><li>Dance</li></a>
                <a href="" ><li>Aerobics</li></a>
            </ul>
    
    </div>
  );
}

export default DropDown;
