import logo from './logo.svg';
import { Suspense } from 'react'
import './App.css';
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import Logo from "./Logo";
import Overlay from "./Overlay";

function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Logo position={[-2, 0, 7.24]} rotation={[0,0,0]}/>
        </Suspense>
      </Canvas>
      <Overlay/>
    </div>
  );
}

export default App;
