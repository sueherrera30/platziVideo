import React from 'react';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import '../assets/styles/Components/header.scss';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({})
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src='../../../public/images/logo-platzi-video-BW2.png' alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          { hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src='../../../public/images/user-icon.png' alt='' />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser ? 
              <li><a href='/'>{user.name}</a></li> :
              null
          }
          {
            hasUser ? (
              <li>
                <a href="#logout" onClick={handleLogout}>Cerrar Sesión</a>
              </li>
            ) : (
              <li>
                <link to='/login' />
              </li>
            )}
        </ul>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {
  logoutRequest,
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
