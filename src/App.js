import React, { useState, useEffect } from 'react'
import InputForm from './components/InputForm'
import PackageView from './components/PackageView'
import PackageList from './components/PackageList'
import Notification from './components/Notification'
import FilterForm from './components/FilterForm'

const App = () => {
  const [packages, setPackages] = useState({})
  const [currentPackage, setCurrentPackage] = useState('')
  const [inputData, setInputData] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [filter, setFilter] = useState('')

  if (Object.entries(packages).length === 0) {
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

  if (currentPackage !== '') {
    return (
      <PackageView
        currentPackage={currentPackage}
        packages={packages}
        setCurrentPackage={setCurrentPackage}
      />
    )
  }
  return (
    <div>
      <FilterForm filter={filter} setFilter={setFilter} />
      <PackageList
        list={Object.keys(packages)}
        setCurrentPackage={setCurrentPackage}
        filter={filter}
      />
    </div>
  )
}

export default App