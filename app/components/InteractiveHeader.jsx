'use client'

import React, { useState } from 'react'

export default function InteractiveHeader({children}) {
    
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full clearNav z-50">
    <div className="max-w-5xl mx-auto flex flex-wrap p-3 flex-col md:flex-row">
      <div className="flex flex-row items-center justify-between md:p-1">
        <a
          href="/"
          className="flex text-2xl text-white font-medium mb-4 md:mb-0"
        >AUTOMATION
        </a>
        <button
          className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
          type="button"
          aria-label="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
      <div
        className={
          "md:flex flex-grow items-center" +
          (navbarOpen ? " flex" : " hidden")
        }
      >
        <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">

          <a className="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
            Careers
          </a>
          <a className="mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
            Features
          </a>
        </div>

      </div>

      {children}

    </div>
  </header>
  )
}
