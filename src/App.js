import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PackageList = ({ list, setCurrentPackage, sp }) => {
  const rows = () =>
    list.sort().map(pckge => (
      <li key={pckge} onClick={() => setCurrentPackage(pckge)}>
        {sp ? sp + pckge :  pckge}
      </li>
    ))

  return rows()
}

const PackageView = ({ currentPackage, packages, setCurrentPackage }) => {
  if (currentPackage === '') return ''
  const packageInfo = packages[currentPackage]
  const dependencies = packageInfo['Dependencies']
  const reverseDependencies = packageInfo['Reverse dependencies']
  const description = packageInfo['Description']
  const unavailable = packageInfo['Unavailable dependencies']


  return (
    <div>
      <b onClick={() => setCurrentPackage('')}>Back</b>
      <h2>{currentPackage}</h2>
      <i>{description}</i>

      <h3>Dependencies</h3>
      <PackageList list={dependencies} setCurrentPackage={setCurrentPackage} />
      <PackageList list={unavailable} setCurrentPackage={()=>{}} sp="NOT INSTALLED: " />

      <h3>Reverse Dependencies</h3>
      <PackageList
        list={reverseDependencies}
        setCurrentPackage={setCurrentPackage}
      />
    </div>
  )
}

const App = () => {
  const [packages, setPackages] = useState({})
  const [currentPackage, setCurrentPackage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/api/sample').then(response => {
      setPackages(response.data)
    })
  }, [])

  var packagesToList = Object.keys(packages)
  if (currentPackage !== '') packagesToList = []

  return (
    <div>
      <PackageView
        currentPackage={currentPackage}
        packages={packages}
        setCurrentPackage={setCurrentPackage}
      />
      <ul>
        <PackageList
          list={packagesToList}
          setCurrentPackage={setCurrentPackage}
        />
      </ul>
    </div>
  )
}

export default App
