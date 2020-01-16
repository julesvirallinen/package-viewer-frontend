import React from 'react'
import axios from 'axios'


const InputForm = ({ inputData, setInputData, setPackages }) => {
  const formHandler = event => {
    event.preventDefault()
    parseData()
  }

  var parseData = () => {
    const dataObject = {
      content: inputData
    }

    axios.post('http://localhost:3001/api/parse', dataObject).then(response => {
      setPackages(response.data)
    })
  }

  const handleDataChange = event => {
    setInputData(event.target.value)
  }
  const useSampleData = () => {
    axios.get('http://localhost:3001/api/sample').then(response => {
      setPackages(response.data)
    })
  }
  return (
    <div>
      <form onSubmit={formHandler}>
        <div>
          Insert contents of file:
          <textarea value={inputData} onChange={handleDataChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <br /> or...
      <button onClick={useSampleData}>Use sample data</button>
    </div>
  )
}

export default InputForm
