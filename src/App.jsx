import Flashcard from '../components/Flashcard'
import {useState} from 'react'
import './App.css'

const App = () => {
  const cards = [
    {
      question: "Before Haaland broke the most goals in a Premier League season, who held that record?", 
      answer: "Alan Shearer"
    },
    {
      question: "Who won the 2014/2015 Champions League?",
      answer: "FC Barcelona"
    },
    {
      question: "Which team won the first World Cup?",
      answer: "Uruguay"
    },
    {
      question: "Who hosted the 2002 World Cup?",
      answer: "South Korea / Japan"
    },
    {
      question: "Which player assited the goal for the famous 'AGUEROOOO' goal?",
      answer: "Mario Balotelli"
    },
    {
      question: "Why did Messi have to leave Barcelona?",
      answer: "Because Barca were broke"
    },
    {
      question: "Who assited Ronaldo for his famous bicycle goal agaisnt Juventes",
      answer: "Dani Carvaja"
    },
    {
      question: "Who score the winning goal in the 6-1 game between Barcelona and PSG?",
      answer: "Sergi Roberto"
    },
    {
      question: "Who missed the last penalty in the Europa League Final between Man U and Villareal?",
      answer: "David De Gea"
    },
    {
      question: "Who is the goat of Football?",
      answer: "Lionel Messi"
    },
  ]

  const [currentCard, setCurrentCard] = useState(0);
  const [showFlip, setShowFlip] = useState(false);
     //keeps track of the displayed card. intially 0 to start w/ first card

  const nextCard = () => {
    
    //getting random card for the next card
    const newCard = Math.floor(Math.random() * cards.length);
    //to make sure new one is not the same as current:
    if (newCard !== currentCard) {
    setCurrentCard(newCard);
    setShowFlip(false); //reset showFlip to false
    } 
    else {
    // if its the same, try it again
    nextCard();
    }
  }
  
  return (
    <div className="App">
      <center>
      <h1>Football Quiz</h1>
      <h2>How good is your ball knowledge? Test it out!</h2>
      <h3>Number of card: 10</h3>   

      <Flashcard question={cards[currentCard].question} answer={cards[currentCard].answer} showFlip={showFlip} setShowFlip={setShowFlip} />

      <button onClick={nextCard}> →</button>
        
      </center>
     
      </div>
  )
}


export default App;