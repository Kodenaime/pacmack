import React from 'react'
import './donate.css'

import { MdOutlinePeople } from "react-icons/md";
import { FiGift } from "react-icons/fi";

const Donation = () => {
  return (
    <section>
      <div className="container donation-container">
        <div className="donation">
          <div className="donate-content">
            <h2>Support The Mission. Impact a Generation</h2>
            <p>Your gift helps us reach, equip, and empower African missionary and cross-cultural kids with hope, identity, and purpose.
                Give today and be part of something eternal.
            </p>
            <div className="donate-btn">
            <div className="btn-primary">
                <MdOutlinePeople /> Register now
            </div>
            <div className="btn-trans">
                <FiGift /> Donate
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Donation