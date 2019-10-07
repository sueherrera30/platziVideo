// import React from 'react';
// import '../assets/styles/Components/categories.scss';

// const Categories = ({ chindren }) => (
//   <div className='categories'>
//     <h3 className='categories__title'>Mi lista</h3>
//     {chindren}
//   </div>
// );
// export default Categories;

import React from 'react';
import '../assets/styles/Components/categories.scss';

const Categories = ({ children, title }) => (
  <div className='categories'>
    <h3 className='categories__title'>{title}</h3>
    {children}
  </div>
);

export default Categories;