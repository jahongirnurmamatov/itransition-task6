import React from 'react'

const Backgrounds = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
        {
            [1,2,3,4,5,6,7].map((background,idx)=><div className='w-full h-[90px] overflow-hidden rounded-sm cursor-pointerF'>
                <img src="https://t3.ftcdn.net/jpg/03/65/64/88/360_F_365648888_nTq9Cajc4e984ifdRAp5Q77KGkGFccgF.jpg" alt="" />
            </div>)
        }
    </div>
  )
}

export default Backgrounds