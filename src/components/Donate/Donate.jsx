import React from 'react'
import './donate.css'

import { MdOutlinePeople } from "react-icons/md";
import { FiGift } from "react-icons/fi";

const Donate = () => {
  return (
    <section>
      <div className="container donate-container">
        <div className="donate">
          <div className="donate-content overlay">
            <h2>Support The Mission. Impact a Generation</h2>
            <p>Your gift helps us reach, equip, and empower African missionary and cross-cultural kids with hope, identity, and purpose.<br></br>
              Give today and be part of something eternal. 
            </p>         
          
            <div className="btn-primary">
              <FiGift /> Donate
            </div>
          </div>
       
        </div>
      </div>
    </section>
  )
}

export default Donate