import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Lock, Mail, Eye, EyeOff, User } from 'lucide-react'
import { Button } from '@mantine/core'

const Reg = () => {

    const [isEyeOpen , setIsEyeOpen] = useState(false)
    const [isEyeOpen2 , setIsEyeOpen2] = useState(false)



    const handleEyeClick = ()=>{
        setIsEyeOpen(!isEyeOpen)
    }


    const handleEyeClick2 = ()=>{
        setIsEyeOpen2(!isEyeOpen2)
    }


    return (
        <div className='bg-gray-100 h-screen flex justify-center items-center'>
            <motion.div className='mx-w-md bg-white rounded-xl p-4 shadow-md' initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6 }} >

                <h1 className='text-center mb-5 text-2xl font-bold '>Registration</h1>

                <form className='space-y-8 w-96'>
                <div className="relative flex gap-2">
                <User className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input  type="text" placeholder='Full Name'  className="pl-10 focus:outline-none border-b border-gray-200 w-full"   />


                    </div>

                    <div className="relative flex gap-2">
                        <Mail className='text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2' />
                        <input type="email" placeholder='Email Address' className="pl-10 focus:outline-none border-b border-gray-200 w-full" />


                    </div>




                    

                    <div className='flex gap-2 relative' >
                        <Lock className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />

                        <div onClick={handleEyeClick} className='absolute right-2'>

                            {isEyeOpen ? <Eye/> : <EyeOff/>} 
                        </div>
                        <input type= { isEyeOpen ? "text" : "password" } placeholder='Enter password..' className="pl-10 focus:outline-none border-b border-gray-200 w-full" />


                    </div>

                    <div className='flex gap-2 relative' >
                        <Lock className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" /> 

                        <div onClick={handleEyeClick2} className='absolute right-2'>

                            {isEyeOpen2 ? <Eye/> : <EyeOff/>} 
                        </div>
                        <input type= { isEyeOpen2 ? "text" : "password" } placeholder='confirm password..' className="pl-10 focus:outline-none border-b border-gray-200 w-full" />


                    </div>

                    


                    <Button fullWidth>Register</Button>






                </form>


            </motion.div>
        </div>
    )
}

export default Reg
