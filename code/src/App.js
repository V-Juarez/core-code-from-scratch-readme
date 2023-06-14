import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Contador from './components/Contador'
import Titulo from './components/Titulo'
import { AppThree } from './components/AppThree.jsx';

function App() {
  const [mostrar, setMostrar] = useState(true)

  return (
    <div className="App">
      {mostrar && <Titulo />}
      <Contador />
      <AppThree /> 
    </div>
  );
}

export default App;
