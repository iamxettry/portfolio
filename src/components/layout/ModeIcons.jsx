'use cient'
import {  PiMoon, PiSun } from "react-icons/pi";
// import { useTheme } from 'next-themes'

const ModeIcons = () => {

  return (
    <>
        <PiSun className='hidden '/>
        <PiMoon className='border rounded-md text-2xl p-1 cursor-pointer'/>
    </>
  )
}

export default ModeIcons