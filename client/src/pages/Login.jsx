import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Lock, Mail, Eye, EyeOff, } from 'lucide-react'
import { Button } from '@mantine/core'
import { Link } from 'react-router-dom';



const Login = () => {

    const [isEyeOpen, setIsEyeOpen] = useState(false)


    const handleEyeClick = () => {
        setIsEyeOpen(!isEyeOpen)
    }




    return (
        <div className='bg-gray-100 h-screen flex justify-center items-center'>
            <motion.div className='mx-w-md bg-white rounded-xl p-4 shadow-md' initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6 }} >

                <h1 className='text-center mb-5 text-2xl font-bold '>Welcome Back</h1>

                <form className='space-y-8 w-96'>
                    <div className='relative flex gap-2'>
                        <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
                        <input type="email" placeholder='Enter email..' className='focus:outline-none border-b border-gray-200 w-full pl-10' />


                    </div>

                    <div className='flex gap-2 relative' >
                        <Lock className='text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2' />

                        <div onClick={handleEyeClick} className='absolute right-2'>

                            {isEyeOpen ? <Eye /> : <EyeOff />}
                        </div>
                        <input type={isEyeOpen ? "text" : "password"} placeholder='Enter password..' className='focus:outline-none border-b border-gray-200 w-full pl-10' />


                    </div>


                    <div className=''>
                        <Button fullWidth>Login</Button>
                        <Button fullWidth variant='filled' color='gray' className='mt-2'>Login with Google</Button>

                        <p className='flex justify-center text-gray-500 mt-2 gap-1'>don't have account ?  <Link to="/ragister" className='text-sky-500 hover:underline'>Ragister</Link></p>
                    </div>



                </form>


            </motion.div>
        </div>
    )
}

export default Login
