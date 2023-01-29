import React from 'react'
import { FiPlus, FiLogOut } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'

const ChannelMenu = () => {
  return (
    <div className="w-[20.5rem] flex flex-col justify-between h-screen ml-16 bg-gray-800 shadow-lg">
      <div className="flex flex-col items-center my-4 gap-2">
        {/* Server Name */}
        <h2 className="text-lg text-gray-400 mr-auto ml-4 align-middle ">
          Name
        </h2>
        <hr className="br-gray-800 border-gray-900 border rounded-full w-full" />
        {/* Channels */}
        <div className="flex items-center text-gray-400 w-full px-4 cursor-pointer">
          <div className="flex-grow">
            <p>Channels</p>
          </div>
          <div>
            <FiPlus size="15" />
          </div>
        </div>
      </div>
      <UserProfile />
    </div>
  )
}

// User Profile
const UserProfile = () => {
  return (
    <div className="flex items-center gap-2 w-full bg-gray-800 pl-2 py-2 text-gray-400 border-t-[2px] border-gray-900 ">
      <div className="flex relative justify-center items-center bg-gray-900 text-white h-11 w-11 rounded-3xl">
        <AiOutlineUser size="20" />
      </div>
      <span className="flex-grow">Username</span>
      <FiLogOut className="mr-4" />
    </div>
  )
}

export default ChannelMenu
