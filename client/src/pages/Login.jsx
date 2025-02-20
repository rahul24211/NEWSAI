import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Lock, Mail, Eye, EyeOff, } from 'lucide-react'
import { Button,Loader } from '@mantine/core'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { login } from './../redux/sclice/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';



const Login = () => {


    const dispatch = useDispatch()

    const {loading} = useSelector((state)=>state.auth)

    const [isEyeOpen, setIsEyeOpen] = useState(false)


    const handleEyeClick = () => {
        setIsEyeOpen(!isEyeOpen)
    }


    const loginSchema = z.object({
        email: z
            .string()
            .min(1, { message: "This filed has to be filled." })
            .email('This is not a vailed email'),

        password: z
        .string()
        .min(1,{message : 'Password is required'})

    })





    const { register, handleSubmit, formState: { errors } } = useForm({

        resolver: zodResolver(loginSchema)
    })


    // console.log(errors);

    const onSubmit = (data) => {

        dispatch(login(data))

    }


    // console.log(import.meta.env.VITE_API_URL);
    
    





    return (
        <div className='bg-gray-100 h-screen flex justify-center items-center'>
            <motion.div className='mx-w-md bg-white rounded-xl p-4 shadow-md' initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6 }} >

                <h1 className='text-center mb-5 text-2xl font-bold '>Welcome Back</h1>

                <form className='space-y-5 w-96' onSubmit={handleSubmit(onSubmit)} >
                    <div className='relative flex '>
                        <Mail className='absolute  top-1/2 transform -translate-y-1/2 text-gray-500'  />
                        <input type="email" placeholder='Enter email..' className='focus:outline-none border-b border-gray-200 w-full pl-8'
                            {...register("email")}
                        />


                    </div>

                    
                    {errors.email &&  <p  className='text-sm text-red-800'>{errors.email.message}</p>}
                    

                    

                    <div className='flex relative' >
                        <Lock className='text-gray-500 absolute  top-1/2 transform -translate-y-1/2' />

                        <div onClick={handleEyeClick} className='absolute right-2'>

                            {isEyeOpen ? <Eye /> : <EyeOff />}
                        </div>
                        <input type={isEyeOpen ? "text" : "password"} placeholder='Enter password..' className='focus:outline-none border-b border-gray-200 w-full pl-8'

                            {...register("password")}

                        />

                        


                    </div>
                    {errors.password && <p className='text-sm text-red-800'>{errors.password.message}</p>}


                    <div className=''>
                        <Button type='submit' fullWidth>
                            
                           {loading ? <Loader size={20} color='white'/> : "Log-in" }
                            
                            </Button>
                        <Button fullWidth variant='filled' color='gray' className='mt-2'>Login with Google</Button>

                        <p className='flex justify-center text-gray-500 mt-2 gap-1'>don't have account ?  <Link to="/register" className='text-sky-500 hover:underline'>Ragister</Link></p>
                    </div>



                </form>


            </motion.div>
        </div>
    )
}

export default Login
