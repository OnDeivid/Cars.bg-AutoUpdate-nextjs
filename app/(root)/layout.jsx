import React from 'react'

export default function layout({ children }) {
    return (
        <div className='h-screen bg-custom-gray'>
            {children}
        </div>

    )
}
