import React from 'react';
import 'tachyons';
import Card from './Card';

const CardSection = ({robots}) =>{
  return(
    <div className='tc'>
     <Card key ={"1"} img={"1"}  name={"ama"} email ={"test@test.com"}/>
    </div>
  );
};
export default CardSection;
