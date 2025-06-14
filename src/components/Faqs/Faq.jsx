import React, { useState } from 'react'

import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";

const Faq = ({ question, answer }) => {

    const [answers, setAnswers] = useState(false);

  return (
    <article className='faq' onClick={() => setAnswers(prev => !prev)} >
        <div className="faq-main">
            <h4>{ question }</h4>
            <button className='faq-btn'>
                {
                  answers ? <FiMinusCircle /> : <FiPlusCircle /> 
                }
            </button>
        </div>
        { answers && <p>{ answer }</p>}
    </article>
  )
}

export default Faq