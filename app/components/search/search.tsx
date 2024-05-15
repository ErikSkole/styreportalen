'use client'
import React, { useState, useEffect } from 'react';

function Search() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [events, setEvents] = useState<any[]>([]);

    // Function to handle the search input change
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    // Function to fetch events based on the search term
    const fetchEvents = async () => {
        try {
            const response = await fetch(`/api/search?name=${encodeURIComponent(searchTerm)}`);
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    // Call fetchEvents whenever the searchTerm changes
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
                    <li key={event.id}>{event.title}</li>
                ))}
            </ul>
        </div>
}

export default Search;