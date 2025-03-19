import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded px-2 py-1 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="user avatar" />
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>Harsha</p>
                <span className='text-xl'>💫</span>
            </div>
        </div>
    </div>
    <div className='divider my-0 py-0 h-1'/>
    </>
  )
}
export default Conversation

// STARTER CODE SNIPPET

// import React from 'react'

// const Conversation = () => {
//   return (
//     <>
//     <div className='flex gap-2 items-center hover:bg-sky-500 rounded px-2 py-1 cursor-pointer'>
//         <div className='avatar online'>
//             <div className='w-12 rounded-full'>
//                 <img src="" alt="user avatar" />
//             </div>
//         </div>
//         <div className='flex flex-col flex-1'>
//             <div className='flex gap-3 justify-between'>
//                 <p className='font-bold text-gray-200'>Harsha</p>
//                 <span className='text-xl'>💫</span>
//             </div>
//         </div>
//     </div>
//     <div className='divider my-0 py-0 h-1'/>
//     </>
//   )
// }
// export default Conversation