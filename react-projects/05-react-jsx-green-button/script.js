const App = ({ initialButtonText, initialClassName }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText)
  const [buttonClass, setButtonClass] = React.useState(initialClassName)

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
root.render(<App initialButtonText="Click me please" initialClassName="" />)
