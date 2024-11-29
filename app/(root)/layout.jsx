import React from 'react'

export default function layout({ children }) {
    return (
        <div className='h-screen bg-gradient-to-t from-slate-900 to-black w-full'>
            {children}
        </div>

    )
}
