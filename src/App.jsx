import { useState } from 'react'
import { Header } from './components/Header'
import { Home } from './page/Home'


export const App = () => {
  const [count, setCount] = useState(0)

  return ( 
    <>
     <Header />
      <Home/>
    </>
  )
}


