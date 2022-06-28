import React, { useState } from 'react';
import { useEffect } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

  const [form, setform] = useState({ //Control de variables.
    username: 'fernando',
    email: 'ferchoserrano0@gmail.com'
  })

  const { username, email } = form;


  /*
    Event es un objeto que tiene cada input o componente
    de HTML el cual contiene atributos como lo es el 'target',
    el target tambien contiene atributos que son los que se declaran
    por el programador.
  */
  const onInputChange = ({ target }) => {

    const { value, name } = target;

    setform({
      ...form,
      [name]: value
    });

  }

  useEffect(() => {

  }, [])

  useEffect(() => {

  }, [username])

  useEffect(() => {

  }, [email])


  return (
    <>
      <h1> Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="usuer@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {
        (username === 'fernando2') && <Message />
      }
      
    </>
  )
}
