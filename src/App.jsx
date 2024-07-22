

import React from 'react'
import './componnets/CharacterList.css'
import CharacterList from './componnets/CharacterList'
const App = () => {
  return (
    <div className="App">
        <h1>Rick and Morty Characters</h1>
        <CharacterList />
    </div>
  )
}

export default App;