"use client"
import Results from '@/app/components/search/results';
import SearchBar from '@/app/components/search/search';
import FilterContainer from '@/app/components/search/filterContainer';
import { DateContext } from '@/app/context/DateContext';
import { useState } from 'react';

export default function Search() {
    const [dateEvent, setDateEvent] = useState('');

    return (
        <DateContext.Provider value={{ dateEvent, setDateEvent }}>
            {<main>
                    <SearchBar />
                    <div className="searchContent flex flex-row justify-end items-center p-24">
                        <Results />
                        <FilterContainer />
                    </div>
            </main>}
        </DateContext.Provider>
    )
}