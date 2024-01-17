import { useState } from 'react';
import Swal from 'sweetalert2';

export const FormularioPregunta = ({ addPregunta }) => {
    const [pregunta, setPregunta] = useState({
        enunciado: "",
        respuesta1: "",
        respuesta2: "",
        respuesta3: "",
        respuesta4: "",
        respuestacorrecta: -1,
        favorita: false
    })

    function handleValidation() {
        let errors = [];
        if (!pregunta.enunciado) {
            errors.push("Enunciado");
        }
        if (!pregunta.respuesta1) {
            errors.push("Respuesta 1");
        }
        if (!pregunta.respuesta2) {
            errors.push("Respuesta 2");
        }
        if (!pregunta.respuesta3) {
            errors.push("Respuesta 3");
        }
        if (!pregunta.respuesta4) {
            errors.push("Respuesta 4");
        }
        if (pregunta.respuestacorrecta === -1) {
            errors.push("Respuesta correcta");
        }

        // Return errors, or validation passed
        if(errors.length == 0){
            return true;
        }else{
            return errors;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let check = handleValidation();
        if (check !== true) {
            let errors = "";
            check.forEach((e) => {
                errors += ", " + e;
            })
            Swal.fire({
                icon: "error",
                title: "La pregunta tiene campos vacios" + errors,
                showConfirmButton: true,
            })
        } else {
            addPregunta({
                ...pregunta
            });
            Swal.fire({
                icon: "success",
                title: "Pregunta añadida correctamente",
                showConfirmButton: false,
                timer: 1200
            })
        }
    }

    const handleChange = (e) => {
        let nuevoValor = (e.target.type === "checkbox") ? e.target.checked : e.target.value;

        if (e.target.type === "radio") nuevoValor = parseInt(e.target.id[e.target.id.length - 1]);

        setPregunta({
            ...pregunta,
            [e.target.name]: nuevoValor
        })
    }


    return (
        //En cada elemento usamos el spreed operator ... para crear una copia del estado y modificar
        //el valor que ha cambiado
        <form className="m-5" onSubmit={handleSubmit} >
            <textarea
                className="form-control mb-2"
                placeholder="Enunciado pregunta"
                name="enunciado"
                value={pregunta.enunciado}
                onChange={handleChange}
            />

            <div className="form-check mb-2">
                <input type="radio" name="respuestacorrecta" className="form-check-input" id="inputCheck1"
                    onChange={handleChange} />
                <input
                    type="text"
                    placeholder="Respuesta 1"
                    className="form-control mb-2"
                    name="respuesta1"
                    htmlFor="inputCheck1"
                    value={pregunta.respuesta1}
                    onChange={handleChange}
                />
            </div>
            <div className="form-check mb-2">
                <input type="radio" name="respuestacorrecta" className="form-check-input" id="inputCheck2"
                    onChange={handleChange} />
                <input
                    type="text"
                    placeholder="Respuesta 2"
                    className="form-control mb-2"
                    name="respuesta2"
                    htmlFor="inputCheck2"
                    value={pregunta.respuesta2}
                    onChange={handleChange}
                />
            </div>
            <div className="form-check mb-2">
                <input type="radio" name="respuestacorrecta" className="form-check-input" id="inputCheck3"
                    onChange={handleChange} />
                <input
                    type="text"
                    placeholder="Respuesta 3"
                    className="form-control mb-2"
                    name="respuesta3"
                    htmlFor="inputCheck3"
                    value={pregunta.respuesta3}
                    onChange={handleChange}
                />
            </div>
            <div className="form-check mb-2">
                <input type="radio" name="respuestacorrecta" className="form-check-input mb-2" id="inputCheck4"
                    onChange={handleChange} />
                <input
                    type="text"
                    placeholder="Respuesta 4"
                    className="form-control mb-2"
                    name="respuesta4"
                    htmlFor="inputCheck4"
                    value={pregunta.respuesta4}
                    onChange={handleChange}
                />
            </div>
            <div className="form-check form-switch form-check-reverse mb-2">
                <input type="checkbox" name="favorita" className="form-check-input " id="inputCheckFavourite" checked={pregunta.favorita}
                    //onChange={(e) => (setRegistroForm({...registroForm, priority: e.target.checked}))}/
                    onChange={handleChange} />
                <label className="form-check-label" htmlFor="inputCheckFavourite">Favorita</label>
            </div>
            <button type="submit" className="btn btn-primary">
                Agregar
            </button>
        </form>
    )


}

