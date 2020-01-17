import React, { useState, useEffect } from 'react'
import InputForm from './components/InputForm'
import PackageView from './components/PackageView'
import PackageList from './components/PackageList'
import Notification from './components/Notification'

const App = () => {
  const [packages, setPackages] = useState({})
  const [currentPackage, setCurrentPackage] = useState('')
  const [inputData, setInputData] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  var packagesToList = Object.keys(packages)
  if (currentPackage !== '') packagesToList = []
  if (
    Object.entries(packages).length === 0 &&
    packages.constructor === Object
  ) {
    return (
      <div>
        <Notification message={errorMessage} />

        <InputForm
          inputData={inputData}
          setInputData={setInputData}
          setPackages={setPackages}
          setErrorMessage={setErrorMessage}
        />
      </div>
    )
  }
  return (
    <div>
      <Notification message={errorMessage} />

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
