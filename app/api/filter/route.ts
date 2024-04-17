import { query } from '../../../db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    if (req.method !== 'GET') {
        return NextResponse.json({ error: 'Method Not Allowed' });
    }
    try {
        const location = await query(`SELECT place FROM public_events`);
        return NextResponse.json(location);
    } catch (error) {
        console.error('Error handling request:', error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}