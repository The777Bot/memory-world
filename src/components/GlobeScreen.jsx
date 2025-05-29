import { useEffect, useRef } from 'react';
import Globe from 'globe.gl';

function GlobeScreen() {
  const globeEl = useRef();

  useEffect(() => {
    const globe = Globe()(globeEl.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .backgroundColor('#000')
      .width(window.innerWidth)
      .height(window.innerHeight);
  }, []);

  return (
    <div ref={globeEl} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }} />
  );
}

export default GlobeScreen;
