import React, { useEffect } from 'react';
import './ContentBlock.css';
import Aos from 'aos';
import 'aos/dist/aos.css';



const ContentBlock = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, [])
  return (
    <div className="container" style={{backgroundImage: `url(https://www.spacex.com/static/images/${props.bgImg})`}}>
      <div className="contents" data-aos="fade-up">
        <h5 className="eventType">{props.type}</h5>
        <h1 className="eventTitle">{props.title}</h1>
        <h6 className="eventDescription">{props.description}</h6>
        {props.learnMoreBtn ? (
        <a href="#" className="learnMore">LEARN MORE</a>
        ) : null}
      </div>
    </div>
  );
};


export default ContentBlock;