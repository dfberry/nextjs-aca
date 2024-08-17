import { NextResponse } from 'next/server'

export const GET = async () => {
  const data = { message: 'Hello, World!' }
  return NextResponse.json({ data })
}
