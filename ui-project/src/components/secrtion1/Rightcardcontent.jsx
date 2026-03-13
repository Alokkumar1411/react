import React from 'react'

const Rightcardcontent = () => {
  return (
    <div className='absolute h-full w-full left-0 top-0 flex flex-col justify-between p-7 ' >
        <h2 className='bg-white h-10 w-10 rounded-full flex justify-center items-center'>1</h2>
        <div>
            <p className='text-white pb-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cupiditate.</p>
            <div className='flex justify-between'>
                <button className='bg-blue-500 text-white rounded-full py-2 px-4'> Satisfied</button>
                <button className='bg-blue-500 text-white rounded-full py-2 px-4'><i className="ri-arrow-right-line"></i></button>
            </div>
            
        </div>
      </div>
  )
}

export default Rightcardcontent
