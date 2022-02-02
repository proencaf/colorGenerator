import { useState } from 'react'

import './App.css'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello world')
  }
  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
          />
          <button className='btn' type='Submit'>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        <h4>List</h4>
      </section>
    </>
  )
}

export default App
