import React from 'react'

const Package = ({ pckge, setCurrentPackage }) => {
  return (
    <li onClick={() => setCurrentPackage(pckge)}>{pckge}</li>
  )
}

export default Package