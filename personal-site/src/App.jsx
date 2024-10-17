import profilePic from './assets/profile-pic.png'
import RoundedImage from './components/RoundedImage';
import './App.css'

function App() { 
  return (
    <>
      <div>
        <a href="https://www.linkedin.com/in/rogervalles/">
          <RoundedImage 
            src={profilePic}
            alt="Roger Vallès"
            width="250px"
            height="250px"
          />
        </a>

      </div>
      <h1>Roger Vallès</h1>
      <div className="card">
        <p>VP Operations @ <a href="https://scopely.com" target="_blank">Scopely</a></p>
      </div>
    </>
  )
}

export default App
