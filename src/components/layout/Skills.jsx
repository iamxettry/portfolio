import React from 'react'
import Skill from './Skill'
import { RiExpandLeftRightLine } from "react-icons/ri";
import {  GoDatabase } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
const Skills = () => {
  return (
    <div>
        <h1 className='font-bold'>Skills</h1>
        <div className='my-2 flex flex-wrap gap-2'>
            <Skill icon={<RiExpandLeftRightLine/>} title="Forntend Development" technology={'React Js, Next.js '} />
            <Skill icon={<GoDatabase/>} title="Backend Development" technology={'Node Js, Python/django '} />
            <Skill icon={<TbWorld/>} title="Web Technologies" technology={'HTML,CSS, JavaScript '} />
        </div>
    </div>
  )
}

export default Skills