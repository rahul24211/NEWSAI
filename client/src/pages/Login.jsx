import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Lock, Mail, Eye, EyeOff, Type } from 'lucide-react'

const Login = () => {

    const [isEyeOpen , setIsEyeOpen] = useState(false)


    const handleEyeClick = ()=>{
        setIsEyeOpen(!isEyeOpen)
    }


    return (
        <div className='bg-gray-100 h-screen flex justify-center items-center'>
            <motion.div className='mx-w-md bg-white rounded-xl p-4 shadow-md' initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6 }} >

                <h1 className='text-center mb-5 text-2xl font-bold '>Welcome Back</h1>

                <form className='space-y-8 w-96'>
                    <div className='flex gap-2'>
                        <Mail className='text-gray-500' />
                        <input type="email" placeholder='Enter email..' className='focus:outline-none border-b border-gray-200 w-full' />


                    </div>

                    <div className='flex gap-2 relative' >
                        <Lock className='text-gray-500' />

                        <div onClick={handleEyeClick} className='absolute right-2'>

                            {isEyeOpen ? <Eye/> : <EyeOff/>}
                        </div>
                        <input type= { isEyeOpen ? "text" : "password" } placeholder='Enter password..' className='focus:outline-none border-b border-gray-200 w-full' />


                    </div>


                    <button className='bg-blue-500 rounded-2xl p-2 mt-2 w-full'>login</button>






                </form>


            </motion.div>
        </div>
    )
}

export default Login
