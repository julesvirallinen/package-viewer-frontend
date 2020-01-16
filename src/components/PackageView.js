import React from 'react'
import PackageList from './PackageList'

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

export default PackageView
