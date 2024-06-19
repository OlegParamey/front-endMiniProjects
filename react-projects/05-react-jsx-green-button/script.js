const App = () => {
  const [buttonText, setButtonText] = React.useState('Click me')
  const [buttonClass, setButtonClass] = React.useState('')

  const OnButtonClick = () => {
    setButtonText('Hello from React')
    setButtonClass('green-btn')
  }
  return (
    <div className="app">
      <button className={buttonClass} onClick={OnButtonClick}>
        {buttonText}
      </button>
    </div>
  )
}
const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App />)
