// WelcomePage.jsx
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import 'public\welcome.css';

const WelcomePage = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 }
  });

  return (
    <div className="welcome-container">
      <animated.div style={props} className="welcome-message">
        <h1>Welcome to Astra</h1>
        <p>Exclusive Dealership Partner of BMW</p>
        <a href="template\dummy2.hbs"></a>
      </animated.div>
    </div>
  );
};

export default WelcomePage;
