import { query } from '../../../db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    if (req.method !== 'GET') {
      return NextResponse.json({ error: 'Method Not Allowed' });
    }
    try {
      if (req.nextUrl.searchParams.has('date')) {
        const date = req.nextUrl.searchParams.get('date');
        console.log(date)
        const events = await query(`SELECT * FROM public_events WHERE event_start LIKE '%${date}%'`);
        return NextResponse.json(events);
      } else {
        const events = await query('SELECT * FROM public_events');
        return NextResponse.json(events);
      }
    } catch (error) {
      console.error('Error handling request:', error);
      return NextResponse.json({ error: 'Internal Server Error' });
    }
}