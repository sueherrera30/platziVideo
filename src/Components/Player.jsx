import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import NotFound from '../Containers/NotFound';
import '../assets/styles/Components/Player.scss';

const Player = (props) => {
  // esto se saca de router en el moment en que se esta sacando la ruta
  // con los dos puntos en router, asi estamos haiendo un match.
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : <NotFound />;
};
const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};
const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps,mapDispatchToProps)(Player);