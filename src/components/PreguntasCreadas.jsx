import { Pregunta } from './Pregunta';
import { useState } from 'react';

export const PreguntasCreadas = ({ preguntas, removeQuestion }) => {


    


    return (

        <div>
            <ul className="list-group">
                {
                    preguntas.map(p => {
                        console.log(p);
                        return (<Pregunta key={p.id} pregunta={p} removeQuestion={removeQuestion} />)
                    })
                }
            </ul>
        </div>
    )
}