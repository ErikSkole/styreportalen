"use client"
import { useEffect, useState, useContext } from "react";
import { DateContext } from "@/app/context/DateContext";

import Arrangement from "./arrangement"
import Link from "next/link";

export default function Results() {
    const [event, setEvent] = useState([]);
    const { dateEvent } = useContext(DateContext);
    console.log(dateEvent);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/table?date=${encodeURIComponent(dateEvent)}`);
            const data = await response.json();
            console.log("tester", dateEvent)
            setEvent(data);
        };

        fetchData();
    }, [dateEvent]);

    return (
        <div className="mainBox flex-col basis-1/2 min-h-1/2">
            {event && event.length && event.map((event:any, index) => (
                <ul key={index}>
                    <Link href={{
                        pathname: '/infoPage',
                        query: { id: event.id, }
                    }}>
                        <Arrangement title={event.title} desc={event.name} pic={event.picture_normal}/>
                    </Link>
                </ul>
            ))}
        </div>
    )
}