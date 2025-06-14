import React from 'react'

import Faq from './Faq'
import './faqs.css'
import SectionHead from '../SectionHead'

const responses = [
  { id: 1, 
    question: "Who can attend PACMACK?",
    answer: "PACMACK is open to missionary kids 16 years above (young and adult), children of cross-cultural workers, and anyone passionate about missions and cross-cultural ministry in Africa."
  },
  { id: 2,
    question: "Where and when is the conference taking place?",
    answer: "PACMACK is open to missionary kids 16 years above (young and adult), children of cross-cultural workers, and anyone passionate about missions and cross-cultural ministry in Africa."
  },
  { id: 3,
    question: "Is there a registration fee?",
    answer: "PACMACK is open to missionary kids 16 years above (young and adult), children of cross-cultural workers, and anyone passionate about missions and cross-cultural ministry in Africa."
  },
  { id: 4,
    question: "Can I volunteer or serve during the conference?",
    answer: "PACMACK is open to missionary kids 16 years above (young and adult), children of cross-cultural workers, and anyone passionate about missions and cross-cultural ministry in Africa."
  },
  { id: 5,
    question: "How can I support PACMACK if I can’t attend?",
    answer: "PACMACK is open to missionary kids 16 years above (young and adult), children of cross-cultural workers, and anyone passionate about missions and cross-cultural ministry in Africa."
  }
]

const Faqs = () => {
  return (
    <section>
      <div className="container faqs">
        <SectionHead 
          head="Faq" 
          title="Frequently Asked Questions" 
          body="Everything you need to know about Pan African conference for Missionary and Cross-cultural Kids "
        />
        <div className="faq-cards">
          {
            responses.map(({id, question, answer}) => {
              return <Faq key={id} question={question} answer={answer} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Faqs