import React from 'react'
import './events.css'

import SectionHead from '../SectionHead'
import worker from '../../assets/worker.png'
import work2 from '../../assets/work2.png'
import work3 from '../../assets/work3.png'

const Events = () => {
  return (
    <section className="events-section" id="events">
      <div className="container events-container">
        <SectionHead
          head="Events" 
          title="Conference Highlights" 
          body="Expert craftsmanship meets innovative design - transforming spaces with timeless wooden creations." 
          className="topper"
        />

        <div className="events">
          <div className="event1">
            <img src={worker} alt="Event 1" className='event-img' />
          </div>
          <div className="event">
            <div className="event2">
            <img src={work2} alt="Event 1" className='event-img' />
          </div>
          <div className="event3">
            <img src={work3} alt="Event 1" className='event-img' />
          </div>
          </div>
        </div>
      </div>

    
    </section>
  )
}

export default Events