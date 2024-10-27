import './App.scss'
import Title from './components/Title'
import Button from './components/Button'
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  console.log(count);
  
  useEffect(() => {
    console.log('UseEffect call also count');
  }, [count])
  
  return (
    <div className="App">
      <Title/>
      <Title text="Texto de prueba 2" />
      <Title text="Texto de prueba 3" />

      <Button />
      <Button text="Boton 2" onClick={() => alert('Boton 2')}/>
      <br/><br/>
      <Button text='Sum +1' onClick={() => setCount(count + 1)}/>
      <Title text={`Number of clicks: ${count}`}/>
    </div>
  )
}

export default App
