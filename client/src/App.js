import React, { useEffect, useState } from 'react';

function App() {

  const [backenData, setBackenData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackenData(data)
      }
    )
  }, [])


  return (
    <div>
       {(typeof backenData.users === 'undefined') ?(
        <p>Loading...</p>
       ): (
        backenData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
       )}
    </div>
  )
}

export default App