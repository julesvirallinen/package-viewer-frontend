import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PackageList = ({ list, setCurrentPackage, sp }) => {
  const rows = () =>
    list.sort().map(pckge => (
      <li key={pckge} onClick={() => setCurrentPackage(pckge)}>
        {sp ? sp + pckge : pckge}
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
      <PackageList
        list={unavailable}
        setCurrentPackage={() => {}}
        sp="NOT INSTALLED: "
      />

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
  const [inputData, setInputData] = useState('')

  // useEffect(() => {
  //   axios.get('http://localhost:3001/api/sample').then(response => {
  //     setPackages(response.data)
  //   })
  // }, [])

  var packagesToList = Object.keys(packages)
  if (currentPackage !== '') packagesToList = []

  const formHandler = event => {
    event.preventDefault()
    parseData()
  }

  const handleDataChange = event => {
    setInputData(event.target.value)
  }

  var parseData = () => {
    const dataObject = {
      content: inputData
    }
    console.log(dataObject)

    axios.post('http://localhost:3001/api/parse', dataObject).then(response => {
      setPackages(response.data)
    })
  }

  const useSampleData = () => {
    console.log("apuya")
    axios.get('http://localhost:3001/api/sample').then(response => {
      setPackages(response.data)
    })
  }

  if (
    Object.entries(packages).length === 0 &&
    packages.constructor === Object
  ) {
    console.log('moro')
    return (
      <div>
        <form onSubmit={formHandler}>
          <div>
            Insert contents of file:
            <textarea value={inputData} onChange={handleDataChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <br /> or...
        <button onClick={useSampleData}>Use sample data</button>
      </div>
    )
  }
  console.log('tääl')
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
