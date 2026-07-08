import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// If that import throws in your three.js version, try:
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useInView } from "@/hooks/useInView";

const SIZE = 140;

export const DragonEyeFloating = () => {
  const mountRef = useRef(null);
  const eyeRef = useRef(null);
  const [wrapRef, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    const mount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(SIZE, SIZE);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const key = new THREE.DirectionalLight(0xffffff, 1.3);
    key.position.set(2, 2, 3);
    scene.add(key);

    const loader = new GLTFLoader();
    loader.load(
      "/models/dragon-eye.glb",
      (gltf) => {
        const eye = gltf.scene;
        eye.scale.set(1.6, 1.6, 1.6); // adjust once you see it rendered
        eyeRef.current = eye;
        scene.add(eye);
      },
      undefined,
      (err) => console.error("Failed to load /models/dragon-eye.glb —", err)
    );

    let targetYaw = 0;
    let targetPitch = 0;

    const handleMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      targetYaw = THREE.MathUtils.clamp(Math.atan2(dx, 600), -0.35, 0.35);
      targetPitch = THREE.MathUtils.clamp(Math.atan2(dy, 600), -0.25, 0.25);
    };
    window.addEventListener("mousemove", handleMouseMove);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (eyeRef.current) {
        eyeRef.current.rotation.y += (targetYaw - eyeRef.current.rotation.y) * 0.08;
        eyeRef.current.rotation.x += (targetPitch - eyeRef.current.rotation.x) * 0.08;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={wrapRef} className={`dragon-eye-floating ${inView ? "dragon-eye-floating--active" : ""}`}>
      <div ref={mountRef} className="dragon-eye-floating-canvas" />
    </div>
  );
};
