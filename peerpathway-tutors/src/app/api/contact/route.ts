import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    // Validate minimal fields
    if (!name || !email || !message) {
        return NextResponse.json({ ok: false }, { status: 400 });
    }

    // Here you would typically handle the form submission, e.g., send an email or save to a database

    return NextResponse.json({ ok: true });
}