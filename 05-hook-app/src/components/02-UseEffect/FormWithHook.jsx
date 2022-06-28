import React from 'react';
import { useForm } from '../../hooks/useForm';

export const FormwithHook = () => {

  const { form, onInputChange } = useForm({
    username: '',
    password: '',
    email: ''
  });

  const { username, password, email} = form;

  return (
    <>
      <h1> Formulario con Custom Hook</h1>
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
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
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

    </>
  )
}
