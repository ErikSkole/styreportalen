import { query } from '../../../db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    if (req.method !== 'GET') {
        return NextResponse.json({ error: 'Method Not Allowed' });
    }
    try {
        const id = req.nextUrl.searchParams.get('id');
        const events = await query(`SELECT * FROM public_events WHERE id = "${id}"`);
        return NextResponse.json(events);
    } catch (error) {
        console.error('Error handling request:', error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}