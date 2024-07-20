import store from './redux/store.js'
import getCurrentTime from './utils/getCurrentTime.js'

const addTimeBtn = document.getElementById('addTime')
addTimeBtn.addEventListener('click', () =>
  store.dispatch({
    type: 'ADD_CURRENT_TIME',
    payload: getCurrentTime(),
  })
)

const timesList = document.getElementById('timesList')

store.subscribe(() => {
  timesList.innerHTML = ''
  const times = store.getState()
  times.forEach((time) => {
    let li = document.createElement('li')
    li.innerText = time
    timesList.appendChild(li)
  })
})

/*
const unsubscribe = store.subscribe(() =>
  console.log(`Redux store just changed! ${store.getState()}`)
)

store.dispatch({
  type: 'ADD_CURRENT_TIME',
  payload: '11:30:00',
})

unsubscribe()

store.dispatch({
  type: 'ADD_CURRENT_TIME',
  payload: '11:32:00',
})

store.dispatch({
  type: 'CLEAR_ALL_TIMES',
})
*/
