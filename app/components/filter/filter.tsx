'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect, useContext } from 'react'
import { DateContext } from '@/app/context/DateContext'


export default function Filter(props:{title:any, id:any,}) {
    const router = useRouter()

    const toggleHidden = () => {
        document.getElementsByClassName("triangle")[props.id].classList.toggle("open");
        document.getElementsByClassName("dropDown")[props.id].classList.toggle("hidden");
    }

    const { setDateEvent } = useContext(DateContext);

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDateEvent(event.target.value);
    };

    const [filter, setFilter] = useState([]);

    useEffect(() => {
        const fetchSted = async () => {
            const response = await fetch('/api/filter');
            const data = await response.json();
            const toggleHidden:any = [...new Set(data.map((item:any) => item.place))]
            setFilter(toggleHidden);
        };
        if (props.title == "Sted") {
            fetchSted();
        }
    })

    


    return (
        <div className="filterbox flex flex-col items-center mb-6 mt-2">
            <div onClick={toggleHidden} className="filterContent flex flex-row m-2">
                <img className="triangle" src="triangle.svg" />
                <h3>{props.title}</h3>
            </div>
            <div className="dropDown hidden flex-col">
                {props.title == "Sted" && filter.map((filter:any, index) => (
                    <ul key={index}>
                        <label>
                            {filter}
                            <input type="checkbox" id="filter" value={filter} />
                        </label>
                    </ul>
                )) || <input type="date" id='dateEvent' onChange={handleDateChange}/>}
            </div>
        </div>
    )
}