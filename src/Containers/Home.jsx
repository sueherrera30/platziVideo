import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../Components/Search';
import Categories from '../Components/Categories';
import Carousel from '../Components/Carousel';
import CarouselItem from '../Components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <>
      <Search />
      {myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {myList.map(item =>
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {myList.trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals.originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  );
};
const mapStoreToProps = state => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  }
};
export default connect(mapStoreToProps, null)(Home);
