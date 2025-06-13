import React, { useRef, useEffect } from 'react'
import './team.css'

import SectionHead from '../SectionHead'
import team1 from '../../assets/team1.png'
import team2 from '../../assets/team2.png'
import team3 from '../../assets/team3.png'

const teamData = [
  {
    image: team1,
    name: "Praise Obah",
    body: "MK/TCK Caregiver with CAPRO for East and Horn of Africa; Lives in Uganda and Kenya"
  },
  {
    image: team2,
    name: "Praise Obah",
    body: "MK/TCK Caregiver with CAPRO for East and Horn of Africa; Lives in Uganda and Kenya"
  },
  {
    image: team3,
    name: "Praise Obah",
    body: "MK/TCK Caregiver with CAPRO for East and Horn of Africa; Lives in Uganda and Kenya"
  },
  {
    image: team1,
    name: "Praise Obah",
    body: "MK/TCK Caregiver with CAPRO for East and Horn of Africa; Lives in Uganda and Kenya"
  },
  {
    image: team2,
    name: "Praise Obah",
    body: "MK/TCK Caregiver with CAPRO for East and Horn of Africa; Lives in Uganda and Kenya"
  },
  {
    image: team3,
    name: "Praise Obah",
    body: "MK/TCK Caregiver with CAPRO for East and Horn of Africa; Lives in Uganda and Kenya"
  },
  {
    image: team1,
    name: "Praise Obah",
    body: "MK/TCK Caregiver with CAPRO for East and Horn of Africa; Lives in Uganda and Kenya"
  },
  {
    image: team3,
    name: "Praise Obah",
    body: "MK/TCK Caregiver with CAPRO for East and Horn of Africa; Lives in Uganda and Kenya"
  }
]

const Team = () => {

   const cardsRef = useRef(null);

  // Setup horizontal scroll on wheel
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
    };

    const slider = cardsRef.current;
    if (slider) {
      slider.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (slider) slider.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <section id="section">
      <div className="container teams-container">
        <SectionHead
          head="Team" 
          title="Planning Committee" 
          body="Meet the passionate team working behind the scenes to prayerfully organize, coordinate, and bring the PACMACK vision to life." 
          className="topper"
        />

        <div className="teams" ref={cardsRef}>
          {
            teamData.map((team, index) => {
              return <div key={index} className="team">
                <img src={team.image} alt={team.name} />
                <div className="team-content">
                  <h3>{ team.name }</h3>
                  <p>{ team.body }</p>
                </div>
              </div>
            })
          }
        </div>

      </div>
    </section>
  )
}

export default Team