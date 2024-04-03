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
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const id = searchParams.id;
    const fetchData = async () => {
      const response = await fetch(`/api/arrangement?id=${encodeURIComponent(id)}`);
      const data = await response.json();
      setEvent(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className='pt-4'>her - {event.name}</h1>
      <h2>{searchParams.id}</h2>
    </div>
  );
};

export default InfoPage;