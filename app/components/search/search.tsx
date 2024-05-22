'use client'
import React, { useState, useEffect, useContext } from 'react';

function Search() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [events, setEvents] = useState<any[]>([]);
    
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const fetchEvents = async () => {
        try {
            const response = await fetch(`/api/search?name=${encodeURIComponent(searchTerm)}`);
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    useEffect(() => {
        if (searchTerm) {
            fetchEvents();
        }
    }, [searchTerm]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search for events..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <ul>
                {events.map((event) => (
                    <li key={event.id}>{event.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Search;