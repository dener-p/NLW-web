import React, { useState } from 'react';

import Input from '../../components/Input';

import successBG from '../../assets/images/success-background.svg';
import logoImage from '../../assets/images/logo.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div id="page-login">
      <div className="background-logo">
        <img src={successBG} alt="background" id="logoBG"/>
        <img src={logoImage} alt="logoImage" id="logoImg"/>
        <h2>Sua plataforma de estudos online.</h2>
      </div>

      <main>
        <form>
          <fieldset>
            <legend>
              Fazer login

            <button>Criar uma conta</button>
            </legend>
            <Input 
            name='name'
            label='Nome Completo'
            value={name}
            onChange={(e) => { setName(e.target.value)}} 
            />

            <Input 
            name='password'
            label='Senha'
            value={password}
            type="password"
            onChange={(e) => { setPassword(e.target.value)}} 
            />

            <div className="buttonsWrapper">
              <button>Lembrar-me</button>
              <button>Esqueci minha senha</button>
            </div>

          </fieldset>
          <footer>
            <button id="loginButton" type="submit">
              Entrar
            </button>
            <div className="footerSpanWrapper">
              <span>
                Não tem conta?
                <button>Cadastre-se</button>
              </span>
              <span>É de graça<img src={purpleHeartIcon} alt="heart icon"></img></span>
            </div>
          </footer>
        </form>
      </main>
    </div>
  );

}

export default Login;