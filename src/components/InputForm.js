import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

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
      if(response.data === undefined) return
      setPackages(response.data)
    })
  }

  const InputField = {
    marginBottom: '10px',
    backgroundColor: '#A1B0BC'
  }

  const sampleButton = {
    marginLeft: '10px'
  }

  return (
    <div>
      <Form onSubmit={formHandler}>
        <div>
          <Form.Control
            style={InputField}
            placeholder="Insert contents of /var/lib/dpkg/status"
            as="textarea"
            value={inputData}
            onChange={handleDataChange}
          />
        </div>
        <div>
          <Button variant="dark" type="submit">
            Analyze
          </Button>{' '}
          ..... or
          <Button
            className="sampleButton"
            style={sampleButton}
            variant="dark"
            onClick={useSampleData}
          >
            Use sample data
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default InputForm
