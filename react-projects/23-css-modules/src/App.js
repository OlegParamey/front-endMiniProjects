import './App.css'
import Info from './components/Info'

function App() {
  return (
    <div className="App">
      <Info />
      {/*CSS rule  from the Info CSS modules doesn't work here*/}
      <div className="info">
        <h1>App component heading</h1>
        <h2>Heading in the info component</h2>
        <button className="my-button">App component button</button>
      </div>
    </div>
  )
}

export default App
