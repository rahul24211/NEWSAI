import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Lock, Mail, Eye, EyeOff, User } from 'lucide-react'
import { Button, Loader } from '@mantine/core'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { signup } from '../redux/sclice/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'

const Reg = () => {

    const [isEyeOpen, setIsEyeOpen] = useState(false)
    const [isEyeOpen2, setIsEyeOpen2] = useState(false)

    const dispatch = useDispatch()

    const { register, handleSubmit } = useForm()


    const onSubmit = (data) => {
        dispatch(signup(data))

        console.log(data);
        

    }

    const { loading } = useSelector((state) => state.auth)



    const handleEyeClick = () => {
        setIsEyeOpen(!isEyeOpen)
    }


    const handleEyeClick2 = () => {
        setIsEyeOpen2(!isEyeOpen2)
    }


    return (
        <div className='bg-gray-100 h-screen flex justify-center items-center'>
            <motion.div className='mx-w-md bg-white rounded-xl p-4 shadow-md' initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6 }} >

                <h1 className='text-center mb-5 text-2xl font-bold '>Create an Account</h1>

                <form className='space-y-8 w-96' onSubmit={handleSubmit(onSubmit)} >
                    <div className="relative flex gap-2">
                        <User className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input type="text"
                            name="name"
                            placeholder='Full Name'
                            className="pl-10 focus:outline-none border-b border-gray-200 w-full"
                            {...register("name")}
                        />


                    </div>

                    <div className="relative flex gap-2">
                        <Mail className='text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2' />
                        <input type="email"
                            name='email'
                            placeholder='Email Address'
                            className="pl-10 focus:outline-none border-b border-gray-200 w-full"
                            {...register('email')}
                        />


                    </div>


                    <div className='flex gap-2 relative' >
                        <Lock className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />

                        <div onClick={handleEyeClick} className='absolute right-2'>

                            {isEyeOpen ? <Eye /> : <EyeOff />}
                        </div>
                        <input type={isEyeOpen ? "text" : "password"}
                            name='password'
                            placeholder='Enter password..'
                            className="pl-10 focus:outline-none border-b border-gray-200 w-full"
                            {...register('password')}
                        />


                    </div>

                    <div className='flex gap-2 relative' >
                        <Lock className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />

                        <div onClick={handleEyeClick2} className='absolute right-2'>

                            {isEyeOpen2 ? <Eye /> : <EyeOff />}
                        </div>
                        <input type={isEyeOpen2 ? "text" : "password"}
                            name='confirm password'
                            placeholder='confirm password..'
                            className="pl-10 focus:outline-none border-b border-gray-200 w-full"
                            {...register('confirm password')}
                        />


                    </div>


                    <div>
                        <Button type='submit' fullWidth>

                            {loading ? <Loader size={20} color='white' /> : 'Sign-up'}


                        </Button>

                        <p className='flex justify-center text-gray-500 gap-1 '>Alread have an account?  <Link to='/login' className='text-sky-500 hover:underline'>Sign-in</Link></p>
                    </div>









                </form>


            </motion.div>
        </div>
    )
}

export default Reg
