import { db } from '@/server/db'
import { NextResponse } from 'next/server'


export async function POST(request: Request) {
    const { email, password } = await request.json()

    try {
        const user = await db.user.findUnique({
            where: { email }
        })

        if (!user || user.password !== password) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            )
        }

        const token = 'admin-logged-in'

        const response = NextResponse.json({ success: true })
        response.cookies.set('admin-token', token)
        return response

    } catch (error) {
        return NextResponse.json(
            { error: 'Login failed' },
            { status: 500 }
        )
    }
}