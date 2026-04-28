import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const HOURS_FILE = path.join(process.cwd(), 'data', 'hours.json');
// Set ADMIN_PASSWORD in .env.local to override the default
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'elisa2025';

export async function GET() {
  try {
    const raw = fs.readFileSync(HOURS_FILE, 'utf-8');
    return NextResponse.json(JSON.parse(raw));
  } catch {
    return NextResponse.json({ error: 'Failed to read hours' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { password, ...data } = await request.json();
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
    }
    fs.writeFileSync(HOURS_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to save hours' }, { status: 500 });
  }
}
