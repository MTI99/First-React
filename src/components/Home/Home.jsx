import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
import avatar from '../../../src/assets/avataaars.svg'
export default function Home() {

  return (
    <>
    
    
    
    <section className="bg-teal-500 flex items-center justify-center min-h-screen">
    <div className="text-center">
    <div className="mb-4">
    <img src={avatar} alt="Avatar" className="w-32 h-32 rounded-full mx-auto" />
    </div>
        <h1 className="text-4xl font-bold text-white mb-2">START FRAMEWORK</h1>
        <div className="flex justify-center items-center mb-4">
            <div className="border-t border-white w-16"></div>
            <div className="border-t border-white w-16"></div>
        </div>
        <p className="text-white text-lg">Graphic Artist - Web Designer - Illustrator</p>
    </div>
</section>
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
