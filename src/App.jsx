import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/Customization";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas shadows camera={{ position: [7, 4, 7], fov: 60 }} dpr={[1, 2]}>
          <fog attach="fog" args={["white", 0, 40]} />
          <color attach="background" args={["#fefeff"]} />
          <Experience />
        </Canvas>
        <Configurator />
        <NavigationBar />
      </div>
    </CustomizationProvider>
  );
}

export default App;
