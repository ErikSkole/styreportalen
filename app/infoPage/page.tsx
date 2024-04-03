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
    <div>
      <h1 className='pt-4'>{event[0]?.name}</h1>
      <img src={event[0]?.picture_normal} alt="Event bilde" />
      <p>{event[0]?.description}</p>
    </div>
  );
};

export default InfoPage;