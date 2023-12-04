import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App bg-dark text-white text-center p-3 w-25" id="quote-box">

      <div id="text">
        Quote Text!
      </div>

      <div id="author">
        Author!
      </div>

      <div id="Game">
        Game!
      </div>

      <button id="new-quote" className="btn btn-primary">Get Quote!</button>

      <a href="#" id="tweet-quote">Tweet Quote!</a>

    </div>
  );
}

export default App;
