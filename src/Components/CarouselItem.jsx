import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, delateFavorite } from '../actions';
import '../assets/styles/Components/carousel.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/delete-icon.png';

const CarouselItem = (props) => {
  const { id, title, year, contentRating, duration, isList } = props;
  const handleSetFavourite = () => {
    props.setFavorite({
      //ELEMENTOS QUE NECESITA UN ITEM PARA VOLVERSE A MOSTRAR
      id, title, year, contentRating, duration,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.delateFavorite(itemId);
  }
  return (
    <div className='carousel-item'>
      {/* <img className='carousel-item__img' src={cover} alt={title}  /> */}
      <img className='carousel-item__img' src='https://s3-eu-west-1.amazonaws.com/abandomedia/indie/foto/db_49884_70.jpg' alt='' />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={playIcon}
              alt='Play Icon'
            />
          </Link>
          {isList ? (
            <img
              className='carousel-item__details--img'
              src={removeIcon}
              alt='remove Icon'
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className='carousel-item__details--img'
              src={plusIcon}
              alt='Plus Icon'
              onClick={handleSetFavourite}
            />
          )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};
CarouselItem.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  delateFavorite,
};

// con este conectamos la aplicacion: nunca olvidar exportarlo arriba pasandole 
//los dos elementos que recibe con el, el primer es el mapeo (si no easta poner null)
export default connect(null, mapDispatchToProps)(CarouselItem);
