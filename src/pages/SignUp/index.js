import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';

import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.png';

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSignUp({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="Meetapp" />
      <Form onSubmit={handleSignUp}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Criar conta</button>
        <Link to="/signup">Já tenho login</Link>
      </Form>
    </>
  );
}
