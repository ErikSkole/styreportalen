"use client"
import Results from '@/app/components/search/results';
import FilterContainer from '@/app/components/search/filterContainer';
import { DateContext } from '@/app/context/DateContext';
import { useState } from 'react';

export default function Search() {
    const [dateEvent, setDateEvent] = useState('');
    const [stedEvent, setStedEvent] = useState('');

    return (
        <DateContext.Provider value={{ dateEvent, setDateEvent, stedEvent, setStedEvent }}>
            {<main>
                <div className="searchContent flex flex-row justify-end items-center p-24">
                    <Results />
                    <FilterContainer />
                </div>
            </main>}
        </DateContext.Provider>
    )
}