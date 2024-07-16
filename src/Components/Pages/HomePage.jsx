import { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import CustomNavbar from '../AppNavbar';
import DownloadSection from '../DownloadSection';
import FeaturesSection from '../FeaturesSection';
import ConnectSection from '../ConnectSection';

import SocialsSection from '../SocialsSection';
import '../../assets/BackgroundStyle.css';

function HomePage() {
  const [sections] = useState([
    { id: 1, component: <DownloadSection /> },
    { id: 2, component: <FeaturesSection /> },
    { id: 3, component: <ConnectSection /> },
    
    { id: 5, component: <SocialsSection /> },
  ]);

  const transitions = useTransition(sections, {
    keys: section => section.id,
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    config: { duration: 500 },
    trail: 100,
  });

  return (
    <div className="area">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <CustomNavbar />
      {transitions((style, item) => (
        <animated.div style={style}>
          {item.component}
        </animated.div>
      ))}
    </div>
  );
}

export default HomePage;
