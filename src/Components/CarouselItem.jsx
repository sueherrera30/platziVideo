import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/Components/carousel.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    {/* <img className='carousel-item__img' src={cover} alt={title}  /> */}
    <img className='carousel-item__img' src='https://s3-eu-west-1.amazonaws.com/abandomedia/indie/foto/db_49884_70.jpg' alt='' />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
        <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

export default CarouselItem;
