"use client"

import { useEffect, useState } from "react";

import Arrangement from "./arrangement"
import Link from "next/link";

export default function Results() {
    const [event, setEvent] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('/api/table');
        const data = await response.json();
        setEvent(data);
        };

        fetchData();
    }, []);

    return (
        <main className="mainBox flex-col basis-1/2 min-h-1/2">
            {event && event.length && event.map((event:any, index) => (
                <ul key={index}>
                    <Link href={{
                        pathname: '/infoPage',
                        query: { id: event.id, }
                    }}>
                        <Arrangement title={event.name} desc={event.description} pic={event.picture_thumb}/>
                    </Link>
                </ul>
            ))}
        </main>
    )
}