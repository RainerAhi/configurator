import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useCustomization } from "../contexts/Customization";

export default function Chair(props) {
  const { nodes, materials } = useGLTF("./cube.gltf");
  const { cushionColor } = useCustomization();
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          position={[0, 250, 0]}
        >
          <meshStandardMaterial color={cushionColor.color} /> 
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("./cube.gltf");
