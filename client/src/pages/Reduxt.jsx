
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@mantine/core'
import { increment,decrement,reset } from '../redux/sclice/CounterSclice'





const Reduxt = () => {

  const {count} = useSelector((state)=>state.count)

  const dispatch = useDispatch()


  return (
    <div>
      <p>{count}</p>
      <Button onClick={()=>dispatch(increment())}>increment</Button>
      <Button onClick={()=>dispatch(decrement())}>decrement</Button>
      <Button onClick={()=>dispatch(reset())}>reset</Button>
    </div>
  )
}

export default Reduxt
