import React from 'react'
import { TfiLayoutLineSolid } from "react-icons/tfi";

const SectionTop = ({ head, title, body }) => {
  return (
    <div className="section-top">
     {/* {`section-head ${className}`}> */}
        <h4><TfiLayoutLineSolid />{ head }</h4>
        <h2>{ title }</h2>
        <p>{ body }</p>
    </div>
  )
}

export default SectionTop