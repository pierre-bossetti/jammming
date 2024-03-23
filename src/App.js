import logo from './logo.svg';
import Button from './Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
            Create your spotify playlist !
        </h1>
        <input type="search" id="site-search" name="q" />
        <Button name="Search" />
        <div className='container'>
            <div className='searchedSongs'>

            </div>
            <div className='selectedSongs'>
            <Button name="Save to Spotify" />
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
