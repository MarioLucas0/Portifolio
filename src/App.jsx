import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './page/Home';


export const App = () => {
  const [count, setCount] = useState(0)

  return ( 
    <>
      <Router>
      <Header />
        <Home/>
      </Router>
    </>
  )
}


