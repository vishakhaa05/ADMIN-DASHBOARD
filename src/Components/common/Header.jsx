import React from 'react'

const Header = ({ title }) => {
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md  shadow-lg border-b border-gray-700">
      <h1 className="text-white text-xl font-semibold">{title}</h1>
    </header>
  )
}

export default Header
