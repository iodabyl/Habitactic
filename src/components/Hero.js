import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [background, setBackground] = useState(1);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     let newBackground = background + 1;
  //     if (newBackground > 2){
  //       newBackground=0;
  //     }
  //     return setBackground(newBackground);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, [background])
  
  return (
    <section className={`hero hero-${background} top-4`}>
        <div className="hero-left hero-text-wide">
            <h1>Learn the habits and tactics <br />to excel with Habitactic</h1>
            <div className="underline-1"><span></span></div>
            <h3>Book a free consultation today, <br />and revolutionize your learning</h3>
            <Link to='/signup' className='btn btn-primary'>Start Today</Link>
        </div>
        <div className="hero-left hero-text-narrow">
            <h1>Join Habitactic</h1>
            <Link to='/signup' className='btn btn-primary'>Start Today</Link>
        </div>
        <div className="hero-blur"></div>
    </section>
  );
}
