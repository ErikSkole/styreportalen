'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

const InfoPage = ({ 
  searchParams,
  }: 
  { searchParams: { 
    id:any, 
  }
  }) => {
  const [event, setEvent] = useState<any[]>([]);
  const router = useRouter()

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
    <div className='infoPage flex flex-row justify-center items-center p-4'>
      <div className='arrangement flex flex-row items-start'>
        <img className='infoPageBilde p-4 object-contain' src={event[0]?.picture_normal} alt="Event bilde" />
        <div className="arrangementInfo p-4">
          <h1 className='pt-4'>{event[0]?.name}</h1>
          <p>{event[0]?.description}</p>
          <button className='billetterBtn' onClick={() => router.push(event[0]?.url_ticket)}>Kjøp billetter</button>
        </div>
      </div>
    </div>
    
  );
};

export default InfoPage;