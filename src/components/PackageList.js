import React from 'react'

const PackageList = ({ list, setCurrentPackage, sp }) => {
  const rows = () =>
    list.sort().map(pckge => (
      <li key={pckge} onClick={() => setCurrentPackage(pckge)}>
        {sp ? sp + pckge : pckge}
      </li>
    ))

  return rows()
}

export default PackageList
