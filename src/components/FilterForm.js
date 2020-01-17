import React from 'react'
import Form from 'react-bootstrap/Form'

const FilterForm = ({ filter, setFilter }) => {
  const handleDataChange = event => {
    setFilter(event.target.value)
  }

  const InputField = {
    marginBottom: '10px',
    backgroundColor: '#A1B0BC'
  }

  return (
    <Form>
      <Form.Control
        type="text"
        placeholder="Filter packages"
        value={filter}
        onChange={handleDataChange}
        style={InputField}
      />
    </Form>
  )
}

export default FilterForm
