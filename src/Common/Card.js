import React from 'react';
import 'tachyons';
import './style.css';

const Card = ({id,heading, content, date}) => {
  return(
    <div className='tm-post '>
      <div className='tc'>
         <article className="bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
                            <hr className="tm-hr-primary"/>
                            <a  className="effect-lily tm-post-link tm-pt-60">
                                <div className="tm-post-link-inner">
                                <img alt='roboImage' src={`https://picsum.photos/id/${id}/200/200`}/>                            
                                </div>
                                <h2 className="tm-pt-30 tm-color-primary tm-post-title">{heading}</h2>
                            </a>                    
                            <p className="tm-pt-30">
                                {content}
                            </p>
                            <div className="d-flex justify-content-between tm-pt-45">
                                <span>Posted on :</span>
                                <span className="tm-color-primary">{date}</span>
                            </div>
                            <hr/>
                            <div className="d-flex justify-content-between">
                                <span>By Purva Samandhya</span>
                            </div>
                        </article>
                        
      </div>
    </div>
  );
};

export default Card;
