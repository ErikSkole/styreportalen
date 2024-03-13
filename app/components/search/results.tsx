"use client"

import { useEffect, useState } from "react";

import Arrangement from "./arrangement"
import Link from "next/link";

export default function Results() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('/api/table');
        const data = await response.json();
        setUsers(data);
        };

        fetchData();
    }, []);

    return (
        <main className="mainBox flex-col basis-1/2 min-h-1/2">
            {users.map((user:any, index) => (
                <ul key={index}>
                    <Link href="/infoPage">
                        <Arrangement title={user.name} desc={user.description} pic={user.picture_thumb}/>
                    </Link>
                </ul>
            ))}
        </main>
    )
}