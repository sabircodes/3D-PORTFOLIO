import {Suspense, useEffect, useRef, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import Homeinfo from '../components/Homeinfo'

import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'


function Home() {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.2;
  audioRef.current.loop = true;
  const [isRotating , setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(()=>{
    if(isPlaying){
      audioRef.current.play();
    }

    return ()=>{
      audioRef.current.pause();
    }
  },[isPlaying])
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition ;

    if (window.innerWidth < 768) {
      screenScale = [0.6, 0.6, 0.6];
      screenPosition = [0,-1.3, -43.4];
    } else {
      screenScale = [1,1,1];
      screenPosition = [-5,-1.5, -40.4];
    }

    return [screenScale, screenPosition ];
  };
  
  const adjustPlaneforscreensize=()=>{
    let screenScale ,  screenPosition;
    

    if(window.innerWidth <768 ){
      screenScale = [1.5,1.5,1.5];
      screenPosition=[0,-1.5,0];
     

    }
    else{
      screenScale = [5,5,5];
      screenPosition=[1,-5,-4];
      

    }

    return [screenScale, screenPosition]

  }

  const [islandScale , islandPosition] = adjustIslandForScreenSize();
  const [planeScale , planePosition] =adjustPlaneforscreensize();
  return (

    <section className="w-full h-screen relative">

    <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
      {currentStage && <Homeinfo currentStage={currentStage}/>}
    </div>
      {/* this is the root component that set ups the entire 3d scene */}
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing':'cursor-grab'}`}
        // jo bhi cheez 0.1 se xada pas hogi or 1000 se zada door hogi wo ni dikhegi
        camera={{near:0.1 , far:1000 , fov: 70 }}
        
      >
      {/* <directionalLight  position={-10,1,1}  intensity={4} /> */}
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <ambientLight intensity={1.5} />
      <hemisphereLight skyColor="#87CEEB" groundColor="#808080" intensity={0.8} />
      <pointLight position={[-1, 2, 0]} intensity={10} color="yellow" />
      {/* <hemisphereLight skyColor="#F1EB90" groundColor="#000000"/> */}
      
      {/* <Bird/> */}
      <Sky isRotating={isRotating}/>
      <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 0.1, 0]}
            scale={islandScale}
          />
      <Plane 
        isRotating={isRotating}
        Scale={planeScale}
        Position={planePosition}
        rotation={[0,20.2,0.1]}
      />

      
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img src={!isPlaying ? soundoff :soundon}
          alt="sound"
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={()=>setIsPlaying(!isPlaying)}
        />
      </div>

    </section>
  )
}

export default Home