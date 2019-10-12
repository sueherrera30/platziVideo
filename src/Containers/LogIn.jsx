import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const LogIn = props => {
  const [form, setValues ] = useState({
    email: '',
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };
  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button
            className='button'
            type='submit'
          >
            Iniciar sesión
          </button>
          <div className='login__container--remember-me'>
            <label>
              <input
                type='checkbox'
                id='cbox1'
                value='first_checkbox'
              />
              Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} alt='google' />
            Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt='twetter' />
              Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          <Link to='/register'>
             Regístrate
          </Link>
        </p>
      </section>
    </section>
  );
};
// arriba el login se debe pasar por los componentes por medio de props.
const mapDispachToProps = {
  loginRequest,
};
// llamamos al segundo paramentro que es el que SE ENCARGA  DE MANEJAR EL DISPACH
//HACIA LOS PROPS
export default connect(null, mapDispachToProps)(LogIn);


