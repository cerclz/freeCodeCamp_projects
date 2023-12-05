import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [quotes, setQuotes] = useState([
    ['Stand amongst the ashes of a trillion dead souls and ask the ghosts if honor matters. The silence is your answer.', 'Mass Effect 3'],
    ['Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain’t nothing fair.', 'Red Dead Redemption'],
    ['I got caught up in the money, the power…I don’t give a s**t, oh f**k man…I had no choice, I had to do it…I only see the opportunity. But when I’m gone, everyone’s gonna remember my name: Big Smoke!', 'Grand Theft Auto: San Andreas'],
    ['I don’t need a weapon; my friends are my power!', 'Kingdome Hearts'],
    ['Shadow and light are two sides of the same coin. One cannot exist without the other.', 'The Legend of Zelda: Twilight Princess'],
    ['I used to be an adventurer like you until I took an arrow to the knee.', 'The Elder Scrolls V: Skyrim']
  ])

  const [quote, setQuote] = useState(quotes[0]);


  function randomQuote () {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }

  
  return (
    <div className="App bg-dark text-white text-center p-3 w-25" id="quote-box">

      <div id="text">
        {quote[0]}
      </div>

      <div id="author">
        {quote[1]}
      </div>

      <button id="new-quote" className="btn btn-primary" onClick={randomQuote}>Get Quote!</button>

      <a href="https://twitter.com/intent/tweet"  id="tweet-quote" target="_blank">Tweet Quote!</a>

    </div>
  );
}

export default App;
