import React from 'react';
import 'tachyons';
import "../common.css";
import './style.css';
const Card = ({name, img}) => {
  return(
    <div className='dib'>
      <div className='tc grow  dib br3 pa1 ma2  bw2 shadow-5 myCards'>
        <img className='bg-white-90 dib br3 pa1 ma2  bw2 shadow-5' style={{width: '350px'}} alt='postWallpaper' src={img}/>
      </div>
    </div>
  );
};

export default Card;
