import React from 'react'
import { X } from "lucide-react";
const Model = ({isOpen,onClose,children}) => {
    if(!isOpen) return null;
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
        <div className='absolute inset-0 bg-black/60 backdrop-blur-sm' onClick={onClose}>

        </div>
        <div className='relative z-10 w-11/12 max-w-xl max-h-[85vh] modal-content overflow-y-auto rounded-xl glow-bg bg-[#0a1629] p-6 text-white'>
            <button onClick={onClose} className='text-gray-400 hover:text-cyan-300 absolute top-3 right-3'> 
                <X size={24}></X>
            </button>
            {children}
        </div>
    </div>
  )
}

export default Model;
