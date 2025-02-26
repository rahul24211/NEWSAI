import React from 'react'
import { Loader } from '@mantine/core'

const LoadingSpinner = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Loader color='black'/>
    </div>
  )
}

export default LoadingSpinner
