import { useGLTF } from '@react-three/drei'
import skyscene from '../assets/3d/sky3.glb'
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
function Sky({isRotating}) {
    
    const sky = useGLTF(skyscene)
    const skyRef = useRef();

    useFrame((_,delta)=>{
      if(isRotating){
        skyRef.current.rotation.y += 0.25 * delta
      }
    })

  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky