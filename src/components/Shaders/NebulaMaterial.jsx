import { shaderMaterial } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

/**
 * A hand-rolled fractal-noise nebula. Three soft color layers (violet, blue,
 * cyan — matching the site's palette) drift past each other at different
 * speeds so the cloud never repeats in an obvious loop.
 */
const NebulaMaterialImpl = shaderMaterial(
  {
    uTime: 0,
    uColorA: new THREE.Color('#4c1d95'),
    uColorB: new THREE.Color('#1e3a8a'),
    uColorC: new THREE.Color('#0e7490'),
  },
  /* vertex */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  /* fragment */ `
    varying vec2 vUv;
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    uniform vec3 uColorC;

    // Classic 2D value-noise + fbm, kept deliberately cheap since this runs
    // full-screen every frame behind the whole hero scene.
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.55;
      for (int i = 0; i < 5; i++) {
        value += amplitude * noise(p);
        p *= 2.05;
        amplitude *= 0.55;
      }
      return value;
    }

    void main() {
      vec2 uv = vUv * 3.0;

      float t = uTime * 0.015;
      float n1 = fbm(uv + vec2(t, -t * 0.6));
      float n2 = fbm(uv * 1.4 - vec2(-t * 0.4, t * 0.3) + 4.2);
      float n3 = fbm(uv * 0.8 + vec2(t * 0.25, t * 0.15) + 9.1);

      vec3 color = mix(uColorA, uColorB, smoothstep(0.2, 0.8, n1));
      color = mix(color, uColorC, smoothstep(0.35, 0.9, n2) * 0.6);
      color += uColorC * pow(n3, 6.0) * 0.5;

      float vignette = smoothstep(1.05, 0.2, length(vUv - 0.5) * 1.4);
      float alpha = clamp(n1 * 0.6 + n2 * 0.3, 0.0, 1.0) * vignette * 0.85;

      gl_FragColor = vec4(color, alpha);
    }
  `,
);

extend({ NebulaMaterialImpl });

/**
 * Drop-in <NebulaMaterial /> for use on a large background plane, e.g.:
 *   <mesh scale={[40, 24, 1]} position={[0, 0, -20]}>
 *     <planeGeometry />
 *     <NebulaMaterial />
 *   </mesh>
 */
const NebulaMaterial = (props) => {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.uTime += delta * 60;
  });

  return (
    <nebulaMaterialImpl
      ref={ref}
      transparent
      depthWrite={false}
      side={THREE.DoubleSide}
      {...props}
    />
  );
};

export default NebulaMaterial;
