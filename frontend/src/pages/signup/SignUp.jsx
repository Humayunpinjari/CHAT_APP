import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-200'>Sign Up 
                <span className='text-blue-500'> New Chat App</span>
            </h1>

            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label> 
                    <input type="text" placeholder='Full Name' className='w-full input input-bordered h-10'/>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Username' className='w-full input input-bordered h-10' />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
                </div>

                {/* GENDER CHECK BOX HERE */}

                <GenderCheckbox/>

                <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>Already have an account??</a>

                <div>
                    <button className='btn btn-block btn-sm mt-2 border border-salte-700'>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp

// STARTER CODE FOR THE SIGN UP COMPONENT

// const SignUp = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//           <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//               <h1 className='text-3xl font-semibold text-center text-gray-200'>Sign Up 
//                   <span className='text-blue-500'> New Chat App</span>
//               </h1>
  
//               <form>
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base label-text'>Full Name</span>
//                       </label> 
//                       <input type="text" placeholder='Full Name' className='w-full input input-bordered h-10'/>
//                   </div>
  
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base label-text'>Username</span>
//                       </label>
//                       <input type="text" placeholder='Username' className='w-full input input-bordered h-10' />
//                   </div>
  
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base label-text'>Password</span>
//                       </label>
//                       <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
//                   </div>
  
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base label-text'>Confirm Password</span>
//                       </label>
//                       <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
//                   </div>
  
//                   {/* GENDER CHECK BOX HERE */}
  
//                   <GenderCheckbox/>
  
//                   <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>Already have an account??</a>
  
//                   <div>
//                       <button className='btn btn-block btn-sm mt-2 border border-salte-700'>Sign Up</button>
//                   </div>
//               </form>
//           </div>
//       </div>
//     )
//   }
  
//   export default SignUp