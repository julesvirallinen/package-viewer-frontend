import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';


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
          <Button variant="dark" type="submit">add</Button>
        </div>
      </form>
      <br /> or...
      <Button variant="dark" onClick={useSampleData}>Use sample data</Button>
    </div>
  )
}

export default InputForm
