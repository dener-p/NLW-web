import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import successBG from '../../assets/images/success-background.svg';
import logoImage from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css';

function SignIn() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div id="page-signIn">
      <main>
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        
        
        <form>
          <fieldset>
            <legend>
              <h1>Cadastro</h1>
              <span>Preencha os dados nos capos abaixos para começar.</span>
            </legend>

            
            <Input 
            name='name'
            label='Nome'
            value={name}
            onChange={(e) => { setName(e.target.value)}} 
            />
            <Input 
            name='lastName'
            label='Sobrenome'
            value={lastName}
            onChange={(e) => { setLastName(e.target.value)}} 
            />
            <Input 
            name='email'
            label='E-mail'
            type='email'
            value={email}
            onChange={(e) => { setEmail(e.target.value)}} 
            />

            <Input 
            name='password'
            label='Senha'
            value={password}
            type="password"
            onChange={(e) => { setPassword(e.target.value)}} 
            />

          </fieldset>
          <footer>
            <button type="submit">
              Cadastrar
            </button>
          </footer>
        </form>
      </main>

      <div className="background-logo">
        <img src={successBG} alt="background" id="logoBG"/>
        <img src={logoImage} alt="logoImage" id="logoImg"/>
        <h2>Sua plataforma de estudos online.</h2>
      </div>
    </div>
  );
}

export default SignIn;