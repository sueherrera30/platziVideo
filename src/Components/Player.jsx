import React from 'react';

const Player = () => {
  return(
    <div className='player'>
      <video controls autoPlay>
        <source src="" type='video/mp4' />
      </video>
      <div className='player-black'>
        <button type='button'>Regresar</button>
      </div>
    </div>
  );
};

export default Player;