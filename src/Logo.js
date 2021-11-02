import * as THREE from "three"
import {useEffect, useRef} from "react";
import { useThree, useLoader, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, useGLTF, ContactShadows } from "@react-three/drei"
import { OrbitControls } from "@react-three/drei";
import textureImg from "./texture.png";


export default function Model({ scroll, ...props }) {
  const ref = useRef()
  const refLogo = useRef()
  const {nodes, materials} = useGLTF("/obj/logo.glb")
  const texture = useLoader(THREE.TextureLoader, textureImg)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    refLogo.current.rotation.set(0.1 + Math.cos(t / 4.5) / 10, Math.sin(t / 4) / 4, 0.3 - (1 + Math.sin(t / 4)) / 8)
    refLogo.current.position.y = (1 + Math.sin(t / 2)) / 10
  })


  useEffect(() => {
    console.log("detroe", ref);

    // setInterval(() => {
    //   console.log(ref);
    // }, 200);
  }, []);

  // 80C7C8
  return (<group>
    <PerspectiveCamera makeDefault ref={ref} {...props}/>
    <OrbitControls camera={ref.current} />
    <mesh
      ref={refLogo}
      name="Logo"
      geometry={nodes.Curve.geometry}
      material={materials.Logo}
      scale={2}
    >
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
    {/* <ContactShadows frames={1} rotation-x={[Math.PI / 2]} position={[0, -0.33, 0]} far={0.4} width={2} height={2} blur={4} /> */}
    <directionalLight
      castShadow
      position={[10, 20, 15]}
      shadow-camera-right={8}
      shadow-camera-top={8}
      shadow-camera-left={-8}
      shadow-camera-bottom={-8}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      intensity={2}
      shadow-bias={-0.0001}
    />
  </group>);
};
