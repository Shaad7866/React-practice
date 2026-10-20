import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className="parent">
      <Card user = 'Shaad' age={22} img="https://images.unsplash.com/photo-1790805971521-7c0fb5cfdb68?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
      <Card user = 'Ayesha' age={20} img = "https://images.unsplash.com/photo-1792410365519-c229c86ee3e7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
      <Card user = 'Arsh' age={12} img = "https://plus.unsplash.com/premium_photo-1792005033667-e6e1e9e2b796?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
    </div>
  )
}

export default App