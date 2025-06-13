import React from 'react'
import './location.css'

import SectionTop from '../SectionTop'
import { HiOutlineArrowRight } from "react-icons/hi2";
import orchid1 from '../../assets/orchid1.png'
import orchid2 from '../../assets/orchid2.png'
import orchid3 from '../../assets/orchid3.png'
import orchid4 from '../../assets/orchid4.png'
import orchid5 from '../../assets/orchid5.png'

const Location = () => {
  return (
    <section className="location-section" id="location">
      <div className="container section-container">
        <SectionTop 
          head="Location" 
          title="Conference Venue" 
        />

        <div className="location-content">
          <div className="location-up">
            <b><i>Orchid Hotels Limited Lekki</i></b>
            <p><b>Address: </b> Plot 3, Orchid Road, Lekki 2nd Lekki Toll Gate After, Chevron Dr, Ologborogan, Lekki 101245, Lagos </p>
          </div>
          <div className="location-btn">
            <a href="">View Location</a> <HiOutlineArrowRight />
          </div>
        </div>

        <div className="location-images">
          <div className="location-right">
            <img src={orchid1} alt="" />
          </div>
          <div className="location-left">
            <img src={orchid2} alt="" />
            <img src={orchid3} alt="" />
            <img src={orchid4} alt="" />
            <img src={orchid5} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location