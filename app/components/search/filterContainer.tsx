'use client'
import { useState, useEffect } from 'react'
import Filter from '../filter/filter'

export default function FilterContainer() {
    const filterNames = ["Tid", "Sted"]

    return (
        <div className="mainBox flex flex-col basis-1/4 h-1/2">
            <h2 className='flex ml-6 mt-2'>Filter</h2>
            <div className="searchBarFilter flex justify-center items-center">Søkefelt</div>
            <div className="flex flex-col justify-center items-center filter">
                {filterNames.map((filter:any, index) => (
                    <ul key={index}>
                        <Filter title={filter} id={index}/>
                    </ul>
                ))}
            </div>
        </div>
    )
}