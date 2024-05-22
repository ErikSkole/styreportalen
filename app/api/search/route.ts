import { query } from '../../../db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    if (req.method !== 'GET') {
        return NextResponse.json({ error: 'Method Not Allowed' });
    }
    try {
        const name = req.nextUrl.searchParams.get('name');
        const events = await query(`SELECT * FROM public_events WHERE name LIKE '%${name}%'`);
        return NextResponse.json(events);
    } catch (error) {
        console.error('Error handling request:', error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}