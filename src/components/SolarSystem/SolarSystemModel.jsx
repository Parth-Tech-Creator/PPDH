import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MODEL_PATH = '/models/solar_system.glb';

/**
 * The uploaded Sketchfab model ("Solar system" by dannzjs, CC-BY-4.0) ships
 * with one baked animation clip that drives every planet's orbit + spin —
 * we just need to play it on loop rather than reinvent orbital mechanics.
 */
const SolarSystemModel = (props) => {
  const group = useRef();
  const { scene, animations } = useGLTF(MODEL_PATH);
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    // Play every clip the file ships with (there's one: "Animation").
    names.forEach((name) => {
      const action = actions[name];
      if (!action) return;
      action.reset().setLoop(THREE.LoopRepeat).play();
    });
    return () => {
      names.forEach((name) => actions[name]?.stop());
    };
  }, [actions, names]);

  // Gentle parallax: the whole system leans very slightly toward the cursor.
  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      x * 0.12,
      0.02,
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -y * 0.06,
      0.02,
    );
  });

  return (
    <Float speed={1.1} rotationIntensity={0.05} floatIntensity={0.4}>
      <group ref={group} {...props} dispose={null}>
        <primitive object={scene} />
      </group>
    </Float>
  );
};

useGLTF.preload(MODEL_PATH);

export default SolarSystemModel;
