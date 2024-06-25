import './App.css'
import PetInfo from './components/PetInfo'

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="8" hasPet={true} />
      <PetInfo animal="dog" age="2" hasPet={false} />
    </div>
  )
}

export default App
