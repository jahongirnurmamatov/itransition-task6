import CreateComponent from '@/components/CreateComponent';
import React, { useRef } from 'react'

const CreateDesign = () => {
    const ref = useRef();
    const obj ={
        name:"main_frame",
        type:"rect",
        id:Math.floor(Math.random()*100+1),
        height:'600',
        width:'400',
        z_index:1,
        color:'#fff',
        image:''
    }
  return (
    <div className='w-screen h-screen flex justify-center items-center relative'>
        <div className="relative w-auto h-auto overflow-auto" ref={ref}>
            <CreateComponent info={obj} current_component={{}} />
        </div>
    </div>
  )
}

export default CreateDesign