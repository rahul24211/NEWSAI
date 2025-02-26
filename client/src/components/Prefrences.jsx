import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react';
import { CircleCheck } from 'lucide-react';
import { Button, Loader } from '@mantine/core';
import { Slide } from "react-awesome-reveal";
import { useDispatch } from 'react-redux';
import { setPreferences } from '../redux/sclice/NewsSlice'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Prefrences = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const {loading} = useSelector((state)=>state.news)


  const categories = ["Technology", "Sport", "Entertenment", "Bussiness", "Health", "Politics"];

  const [selectCategaries, setSelectCategeries] = useState([])

  // console.log(selectCategaries);



  function ToggalCategories(categary) {
    setSelectCategeries(selectCategaries.includes(categary) ? selectCategaries.filter((c) => c !== categary)
      : [...selectCategaries, categary]

    )

  }


  const handleSavePrefrences = async () => {

    await dispatch(setPreferences({ preferences: selectCategaries }))

    navigate('/')
  }


  return (

<Slide>
    <div className='h-screen flex flex-col justify-center items-center bg-gray-100  '>
      
        
        <h1 className='text-gray-800 font-bold text-4xl '>Select Your Interests</h1>

        <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8'>
          {categories.map((categary, index) => (
            <motion.div
              key={index}

              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`shadow-md rounded-2xl px-6 py-4 text-center ${selectCategaries.includes(categary) && 'bg-blue-500 text-white'}`}
              onClick={() => ToggalCategories(categary)}

            >
              <span className='flex gap-3'>{selectCategaries.includes(categary) ? <CircleCheck /> : null} {categary} </span>
            </motion.div>
          ))}






        </div>
        <div className='flex justify-center items-center mt-8 '>
          <Button onClick={handleSavePrefrences}>{loading ? <Loader size={20} color='white' /> : 'Save Preferences'}</Button>
        </div>
     
    </div>
    </Slide>



  )
}

export default Prefrences
