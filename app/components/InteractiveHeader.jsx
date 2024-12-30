'use client'
import Link from 'next/link';

import React, { useState } from 'react'
import { endpoints } from '../CONST';



export default function InteractiveHeader({ children }) {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const firstChild = React.Children.toArray(children)[0];
  const secondChild = React.Children.toArray(children)[1];

  return (

    <header className="stiky top-0 w-full bg-custom-gray">
      <div className="max-w-8xl mx-auto flex flex-wrap p-2 flex-col md:flex-row">

        <div className="flex flex-row  items-center justify-between md:p-1">
          <Link
            href={endpoints.home}
            className="flex text-xl text-custom-light-gray  font-medium mb-1 md:mb-0"
          >AUTOMATION
          </Link>
          <button
            className="text-white pb-1 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {/* <svg
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
            </svg> */}
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center " + " flex"
          }
        >
          {/* className={
            "md:flex flex-grow items-center " +
            (navbarOpen ? " flex" : " hidden") 
          } */}
          {firstChild}
        </div>

        {secondChild}

      </div>
    </header>
  )
}
