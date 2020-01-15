import React, { useState, useEffect } from 'react'
import parseJson from 'parse-json'
import axios from 'axios'
import Package from './components/Package'

const App = () => {
  const [packages, setPackages] = useState({})

  console.log('moromoro')

  useEffect(() => {
    axios.get('http://localhost:3001/api/sample').then(response => {
      setPackages(response.data)
    })
  }, [])

  const rows = () =>
    Object.values(packages).map(pckge => (
      <Package key={pckge['Package']} pckge={pckge['Package']} />
    ))

  console.log(rows)
  console.log('moro')

  return (
    <div>
      
      <ul>{rows()}</ul>
    </div>
  )
}

export default App
