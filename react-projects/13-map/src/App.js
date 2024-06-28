import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'

const texts = [
  'Click me!',
  'Click me please!',
  'Hit me',
  'Press me',
  'Click me again!',
  "Touch  me, don't be shy",
]

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Counter number={count} />
      {texts.map((bText, index) => {
        return (
          <Button onClick={incrementCount} buttonText={bText} key={index} />
        )
      })}
    </div>
  )
}

export default App
