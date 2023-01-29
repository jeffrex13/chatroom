import React from 'react'
import { FaRegLightbulb, FaPoo } from 'react-icons/fa'
import { CiBasketball } from 'react-icons/ci'

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen flex flex-col bg-gray-900">
      <BarIcon icons={<FaRegLightbulb size="30" />} text="Brainstorm" />
      <hr className="br-gray-800 border-gray-800 border rounded-full mx-3" />
      <BarIcon icons={<FaPoo size="30" />} text="Shit" />
      <BarIcon icons={<CiBasketball size="30" />} text="Sports" />
    </div>
  )
}

const BarIcon = ({ icons, text }: any) => {
  return (
    <div className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-2 bg-gray-800 shadow-lg rounded-3xl text-white hover:text-green-600 hover:rounded-xl cursor-pointer transition-all duration-100 east-linear group">
      {icons}
      <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white text-xs bg-gray-900 transition-all duration-100 scale-0 origin-left group-hover:scale-100">
        {text}
      </span>
    </div>
  )
}

export default Sidebar
