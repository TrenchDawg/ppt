import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { name, email, subject, message } = await request.json();

    // Validate minimal fields
    if (!name || !email || !message) {
        return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Here you would typically handle the application logic, such as saving to a database or sending an email

    return NextResponse.json({ ok: true });
}