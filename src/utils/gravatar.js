import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  //es el mail que recibimos mas trim, que nos ayuda a eliminar los espacios.
  const formattedEmail = (email).trim().toLowerCase();
  const hash = md5(formattedEmail, { enconding: 'binary' });

  // unimos base con el hash:
  return `${base}${hash}`;
};

export default gravatar;