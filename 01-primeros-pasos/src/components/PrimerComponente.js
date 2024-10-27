import React, { useState } from 'react'

export const PrimerComponente = () => {

  // let nombre = 'Cristian';
  let web = 'https://facebook.com/cristian';
  let cursos = [
    'JavaScript',
    'React',
    'Node'
  ];

  const [nombre, setNombre] = useState('Victor');

  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
    //nombre = nuevoNombre;
  }

  return (
    <div>
        <h1>Mi primer componente</h1>
        <p>Este es un texto en mi primer componente</p>
        <p>mi nombre es: <strong className={nombre.length >= 4 ? 'green' : 'red' }>{nombre}</strong></p>
        <p>mi web es: {web} </p>

        <input type='text' onChange={ e => cambiarNombre(e.target.value) } placeholder='Cambiar el nombre' />

        <button onClick={ e => {
          console.log('El valor guardado en tu estado es:', nombre);
        }}>Mostrar valor del estado</button>

        <button onClick={ e => cambiarNombre('JOHAN QUINTERO')}>
          Cambiar nombre
        </button>

        <h2>Cursos</h2>
        <ul>
          {
            cursos.map( (curso, i) => {
              return (<li key={i}>{curso}</li>)
            })
          }
        </ul>
    </div>
  )
}
