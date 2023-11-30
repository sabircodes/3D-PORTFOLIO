import React, { useEffect } from 'react'
import planescene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useRef } from 'react';
function Plane({isRotating , ...props }) {
    const ref = useRef();
    const {scene,animations} = useGLTF(planescene)
    const { actions } = useAnimations(animations,scene);

    useEffect(()=>{
      if(isRotating){
        actions['Take 001'].play();

      }else{
        actions['Take 001'].stop();
      }
    },[actions,isRotating])
    


  return (
    <mesh {...props}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane