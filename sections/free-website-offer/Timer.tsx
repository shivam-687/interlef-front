import React, { useEffect, useState } from 'react'

function countdownTimer() {
    // Set the date for the countdown
    const countdownDate = new Date('2023/03/06' ).getTime();
    // Get the current date and time
    const now =Date.now();
  
    // Calculate the time remaining
    const distance = countdownDate - now;
  
    // Calculate days, hours, minutes and seconds remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Return the countdown as a string
    return {days, hours, minutes, seconds}
  }
  


  const TimeBlock = ({time, text}: {time: number, text: string}) => {
    return <div className='p-2 last:border-r-0 border-r border-white flex flex-col items-center justify-center text-4xl'>
        {time}
        <span className='font-bold text-base'>{text}</span>
    </div>
  }
  

const Timer = () => {
    const [time, setTime] =  useState(countdownTimer())


    useEffect(() => {
      const interval = setInterval(() => {
        const st = countdownTimer()
        setTime(st)
        // console.log("time", st )
      }, 1000)
    
      return () => {
        clearInterval(interval);
      }
    }, [])
    
  return (
    <div className='grid grid-cols-4 max-w-lg w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md shadow-lg'>
        <TimeBlock time={time.days} text="Days"/>
        <TimeBlock time={time.hours} text="Hr"/>
        <TimeBlock time={time.minutes} text="Min"/>
        <TimeBlock time={time.seconds} text="Sec"/>
    </div>
  )
}

export default Timer