import React, {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/register").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }    )
  }
  )
  return (
    <div>App</div>
  )
}

export default App
