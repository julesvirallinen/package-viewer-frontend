import React from 'react'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

const PackageList = ({ list, setCurrentPackage, disabled }) => {
  if (disabled === undefined) {
    var disabled = false
  }
  const packageStyle = {
    padding: '1.25em 1.4em',
    margin: '0em 1em 1em 0em',
    backgroundColor: '#708699'
  }

  const containerStyle = {
    justifyContent: 'flex-start',
    display: 'flex',
    flexWrap: 'wrap'
  }

  const rows = () =>
    list.sort().map(pckge => (
      <Button
        variant="dark"
        // style={packageStyle}
        key={pckge}
        onClick={() => setCurrentPackage(pckge)}
        disabled={disabled}
      >
        {pckge}
      </Button>
    ))

  return <div style={containerStyle}>{rows()}</div>
}

export default PackageList
