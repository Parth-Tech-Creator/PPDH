import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Preload } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import SolarSystemModel from './SolarSystemModel';
import NebulaMaterial from '../Shaders/NebulaMaterial';

/**
 * The hero's centerpiece: a full WebGL scene rendering the uploaded solar
 * system GLB, wrapped in bloom + a hand-rolled nebula backdrop + a drifting
 * starfield. Camera slowly auto-orbits; dragging still lets a visitor pilot
 * their own look-around, which reads better as "piloting a spacecraft" than
 * a fully locked camera would.
 */
const SolarSystemScene = ({ interactive = true }) => {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 40, 130], fov: 48, near: 0.1, far: 2000 }}
    >
      {/* Deep space base tone + fog so distant geometry fades instead of hard-clipping */}
      <color attach="background" args={['#05060f']} />
      <fog attach="fog" args={['#05060f', 140, 420]} />

      <ambientLight intensity={0.35} color="#4f7cff" />
      <hemisphereLight args={['#8b5cf6', '#05060f', 0.5]} />
      <pointLight position={[0, 0, 0]} intensity={4} decay={0} color="#fff3d6" />
      <pointLight position={[-80, 60, -60]} intensity={1.2} decay={0} color="#22d3ee" />

      <mesh position={[0, 0, -140]} scale={[420, 260, 1]}>
        <planeGeometry args={[1, 1, 1, 1]} />
        <NebulaMaterial />
      </mesh>

      <Stars radius={260} depth={80} count={3200} factor={2.4} saturation={0} fade speed={0.4} />

      <Suspense fallback={null}>
        <SolarSystemModel scale={0.9} />
        <Preload all />
      </Suspense>

      <EffectComposer multisampling={0}>
        <Bloom
          mipmapBlur
          luminanceThreshold={0.18}
          luminanceSmoothing={0.85}
          intensity={1.15}
          radius={0.8}
        />
        <Vignette eskil={false} offset={0.15} darkness={0.65} />
      </EffectComposer>

      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={interactive}
        enableRotate={interactive}
        autoRotate
        autoRotateSpeed={0.35}
        minDistance={45}
        maxDistance={230}
        target={[0, 0, 0]}
      />
    </Canvas>
  );
};

export default SolarSystemScene;
