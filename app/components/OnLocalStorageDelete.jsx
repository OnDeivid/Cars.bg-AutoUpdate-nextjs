'use client'
import React from 'react'

export default function OnLocalStorageDelete({ onNextDay }) {
    if (onNextDay) {
        console.log('data has been deleted!')
        localStorage.removeItem('updateCars')
    }
    return (
        <div>

        </div>
    )
}
