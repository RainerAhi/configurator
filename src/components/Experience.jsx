import {
  Environment,
  Float,
  MeshReflectorMaterial,
  OrbitControls,
  SoftShadows,
} from "@react-three/drei";
import Chair from "./Chair";
import { Suspense } from "react";
import { MeshPhysicalMaterial, MeshStandardMaterial, PlaneGeometry } from "three";

export default function Experience() {
  return (
    <>
      <SoftShadows intensity={ 20 } />
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[2.5, 8, 5]} intensity={1.5} shadow-mapSize={1024}>
        <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
      </directionalLight>
      <pointLight position={[-10, 0, -20]} color="white" intensity={1} />
      <pointLight position={[0, -10, 0]} intensity={1} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>
      <Suspense >
        <Chair position={ [ 0, -2, 0 ] } />
      </Suspense>
      <OrbitControls minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 1} enableZoom={ true } enableRotate={ true } enablePan={ false } />
      <Environment preset='studio' />
      </>
  )
}

