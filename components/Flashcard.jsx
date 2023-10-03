import React from 'react'
import {useState} from 'react'
import './flashcard.css'

const Flashcard = ({answer,question, showFlip, setShowFlip}) => {
  const toggleAnswer = () => {
    setShowFlip(!showFlip);    
  }   //toggle the value of showFlip between true and false. Called when flash clicked
  



  
  return (
    //(below) if 'showFlip' is true, 'show-answer' is added to change card appearance
    <div className={`flashcard ${showFlip ? 'show-answer' : ''}`} onClick={toggleAnswer} >
      {showFlip ? answer : question}
      
    </div>

  )
}

export default Flashcard