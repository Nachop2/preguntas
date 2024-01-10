import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import { FormularioPregunta } from './components/FormularioPregunta.jsx'

let idActualPregunta = 0;

function App() {
  const [preguntas, setPreguntas] = useState([]);

  const addQuestion = (nueva) => {
    nueva.id = idActualPregunta;
    idActualPregunta++;
    setPreguntas([...preguntas, nueva]);
  }
  
 
  
  
  
  return (
    <>
    <FormularioPregunta
    addPregunta={addQuestion}>
  </FormularioPregunta>
    </>
  );
}

export default App;
