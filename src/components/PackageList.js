import React from 'react'
import Button from 'react-bootstrap/Button'

const PackageList = ({ list, setCurrentPackage, disabled, filter }) => {
  if (disabled === undefined) {
    disabled = false
  }

  if (filter) {
    list = list.filter(pckge => pckge.includes(filter))
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
