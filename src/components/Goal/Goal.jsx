import React from 'react'

import SectionTop from '../SectionTop'
import goal from '../../assets/goal.png'

const Goal = () => {
  return (
    <section className="goal-section" id="goal">
      <div className="about container">
        <div className="about-image">
          <img src={goal} alt="" />
        </div>
        <div className="goal-content">
          <SectionTop 
            head="Goal" 
            title="Our Mission & Vision" 
            body="PACMACK exists to empower the young and adult children of African Christian cross-cultural workers—those uniquely shaped by missionary life across cultures. Our mission is to create a space where their identity is affirmed, their stories are heard, and their faith is strengthened.
            We envision a growing community of African missionary and cross-cultural kids who thrive spiritually, emotionally, and socially—no matter where they live or serve. Through annual gatherings, Christ-centered conversations, mentorship, and shared experiences, we aim to nurture resilient disciples of Christ who are deeply rooted in their calling and equipped to impact the world." 
            className="topper"
          />
        </div>
        
      </div>
    </section>
  )
}

export default Goal