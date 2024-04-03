'use client'
import React from 'react';
import { useEffect, useState } from 'react';

const InfoPage = ({ 
  searchParams,
  }: 
  { searchParams: { 
    id:any, 
  }
  }) => {
  const [event, setEvent] = useState<any[]>([]);

  useEffect(() => {
    const id = searchParams.id;
    const fetchData = async () => {
      const response = await fetch(`/api/arrangement?id=${encodeURIComponent(id)}`);
      const data = await response.json();
      console.log(data)
      setEvent(data);
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-row justify-center p-4'>
      <div className='arrangement flex flex-row items-start'>
        <img className='w-36 h-auto p-4' src={event[0]?.picture_normal} alt="Event bilde" />
        <div className="arrangementInfo p-4">
          <h1 className='pt-4'>{event[0]?.name}</h1>
          <p>{event[0]?.description}</p>
        </div>
      </div>
    </div>
    
  );
};

export default InfoPage;