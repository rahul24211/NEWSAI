import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react';
import { CircleCheck } from 'lucide-react';
import { Button } from '@mantine/core';


const Prefrences = () => {

  const categories = ["Technology", "Sport", "Entertenment", "Bussiness", "Health", "Politics"];

  const [selectCategaries, setSelectCategeries] = useState([])

  // console.log(selectCategaries);



  function ToggalCategories(categary) {
    setSelectCategeries(selectCategaries.includes(categary) ? selectCategaries.filter((c) => c !== categary)
      : [...selectCategaries, categary]

    )

  }


  return (

    <div className='h-screen flex flex-col justify-center items-center '>

      <h1 className='text-gray-800 font-semibold text-2xl'>Select Interests</h1>

      <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 mt-5'>
        {categories.map((categary,index) => (
          <motion.div
          key={index}

            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`shadow-md rounded-2xl px-5 py-4 text-center ${selectCategaries.includes(categary) && 'bg-blue-500 text-white'}`}
            onClick={() => ToggalCategories(categary)}

          >
            <span className='flex gap-3'>{selectCategaries.includes(categary) ? <CircleCheck /> : null} {categary} </span>
          </motion.div>
        ))}


<Button className='shadow-md rounded-2xl px-6 py-2 text-center '>Save Preference</Button>
      


      </div>

    </div>

  )
}

export default Prefrences
