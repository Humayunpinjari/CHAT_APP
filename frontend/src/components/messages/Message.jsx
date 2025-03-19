import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="} alt="Tailwind CSS chat bubble component" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>HI What is up??</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>

    </div>
  )
}

export default Message