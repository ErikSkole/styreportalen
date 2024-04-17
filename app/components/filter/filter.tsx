'use client'

import { useState, useEffect } from 'react'


export default function Filter(props:{title:any, id:any,}) {
    const test = () => {
        document.getElementsByClassName("triangle")[props.id].classList.toggle("open");
        document.getElementsByClassName("dropDown")[props.id].classList.toggle("hidden");
    }

    const [filter, setFilter] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/filter');
            const data = await response.json();
            const test:any = [...new Set(data.map((item:any) => item.place))]
            setFilter(test);
        };
        if (props.title == "Sted") {
            fetchData();
        }
    })


    return (
        <div className="filterbox flex flex-col items-center mb-6 mt-2">
            <div onClick={test} className="filterContent flex flex-row m-2">
                <img className="triangle" src="triangle.svg" />
                <h3>{props.title}</h3>
            </div>
            <div className="dropDown hidden flex-col">
                {filter.map((filter:any, index) => (
                    <ul key={index}>
                        <label>
                            {filter}
                            <input type="checkbox" id="filter" value={filter} />
                        </label>
                    </ul>
                ))}
            </div>
        </div>
    )
}