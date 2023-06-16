import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Preload } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./planet/sceneDraco.glb');

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' });

  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {isBigScreen && (
          <>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI}
              minPolarAngle={0}
            />
            <Earth />
          </>
        )}

        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
