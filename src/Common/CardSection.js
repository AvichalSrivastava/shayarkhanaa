import React from 'react';
import 'tachyons';
import Card from './Card';

const CardSection = ({i,h,c,d}) =>{
  return(
    <div className='tc'>
     <Card key ={'1'} id={i} heading={h}  content={c} date ={d}/>
    </div>
  );
};
export default CardSection;
