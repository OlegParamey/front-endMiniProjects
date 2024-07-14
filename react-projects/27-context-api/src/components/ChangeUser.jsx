import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function ChangeUser() {
  const { setUser } = useContext(UserContext)
  const [inputValue, setInputValue] = useState('')

  function handleFormSubmit(event) {
    event.preventDefault()
    setUser(inputValue)
  }

  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  return (
    <>
      <h3>Change User Name</h3>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={inputValue}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <button type="submit">Change User</button>
      </form>
    </>
  )
}

export default ChangeUser
