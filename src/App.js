import logo from './logo.svg';
import './App.css';
import Swal from 'sweetalert2';

import { useState } from 'react';
import { FormularioPregunta } from './components/FormularioPregunta.jsx';
import { PreguntasCreadas } from './components/PreguntasCreadas';

let idActualPregunta = 0;

function App() {
  const [preguntas, setPreguntas] = useState([]);

  const addQuestion = (nueva) => {
    nueva.id = idActualPregunta;
    idActualPregunta++;
    setPreguntas([...preguntas, nueva]);
  }

  const removeQuestion = (id) => {
    Swal.fire({
      title: "Estas seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, estoy seguro"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Aa" + id);
        console.log(id);
        setPreguntas(preguntas.filter((e) => e.id != id));
        Swal.fire({
          title: "Eliminado!",
          text: "La pregunta fue eliminada",
          icon: "success"
        });
      }
    });

  }




  return (
    <>
      <FormularioPregunta
        addPregunta={addQuestion}>
      </FormularioPregunta>

      <PreguntasCreadas
        preguntas={preguntas}
        removeQuestion={removeQuestion}
      ></PreguntasCreadas>
    </>
  );
}

export default App;
