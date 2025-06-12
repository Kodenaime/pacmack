import React, { useEffect, useState } from 'react';
import './timer.css'

import { MdOutlinePeople } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

const Timer = () => {

    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date(`${now.getFullYear()}-10-01T00:00:00`);
  
      // If the date has passed this year, set for next year
      if (now > targetDate) {
        targetDate.setFullYear(now.getFullYear() + 1);
      }
  
      const difference = targetDate - now;
  
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer); // Cleanup on unmount
    }, []);

  return (
    <section id="timer" className='timer-section'>
      <div className="container timer-container">
        <div className="timer-left">
          <h4>PACMAKC 2025, NIGERIA</h4>
          <div className="theme">
            <span>theme</span> <h1>THRIVE</h1>
          </div>
        </div>

        <div className="timer-center">
          
          <div className="timers">
            <div className='timer'>
              <span>{timeLeft.days}</span> <h5> Days</h5>
            </div>:
            <div className='timer'>
              <span>{timeLeft.hours}</span> <h5>Hours</h5> 
            </div>:
            <div className='timer'>
              <span>{timeLeft.minutes}</span> <h5>Minutes</h5>
            </div>:
            <div className='timer'>
              <span>{timeLeft.seconds}</span> <h5>Seconds</h5> 
            </div>
          </div>
  
        </div>

        <div className="timer-right">
          <div className="btn-primary">
            <MdOutlinePeople /> Register now
          </div>
          <div className="btn-trans text-black">
            <MdOutlinePhone /> Contact Us
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timer