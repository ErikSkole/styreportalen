"use client"
import { useEffect, useState, useContext } from "react";
import { DateContext } from "@/app/context/DateContext";

import Arrangement from "./arrangement"
import Link from "next/link";

export default function Results() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [events, setEvents] = useState<any[]>([]);
    const { dateEvent, stedEvent } = useContext(DateContext);

    // Function to handle the search input change
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    // Function to fetch events based on the search term
    const fetchEvents = async () => {
        try {
            const response = await fetch(searchTerm ? `/api/search?name=${encodeURIComponent(searchTerm)}` : dateEvent ? `/api/table?date=${encodeURIComponent(dateEvent)}`: `/api/sted?sted=${encodeURIComponent(stedEvent)}`);
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    // Call fetchEvents whenever the searchTerm changes
    useEffect(() => {
        fetchEvents();
    }, [searchTerm, dateEvent, stedEvent]);

    return (
        <div className="flex flex-col items-center " >
            <input className="flex border"
            type="text" 
            placeholder="Search for events..."
            value={searchTerm}
            onChange={handleSearchChange}
            />
            <div className="mainBox flex-col basis-1/2 min-h-1/2">
                {events && events.length > 0 ? events.map((event:any, index) => (
                    <ul key={index}>
                        <Link href={{
                            pathname: '/infoPage',
                            query: { id: event.id, }
                        }}>
                            <Arrangement title={event.title} desc={event.name} pic={event.picture_normal}/>
                        </Link>
                    </ul>
                )) : <p>Ingen resultat</p>}
            </div>
        </div>
    )
}