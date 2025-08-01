'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function LoginPage() {
    const router = useRouter()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const token = document.cookie.includes('admin-token')
        if (token) router.push('/admin/dashboard')
    }, [router])

    const onSubmit = async (data: any) => {
        setIsLoading(true)
        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                router.push('/admin/dashboard')
            } else {
                setError('Invalid credentials')
            }
        } catch (err) {
            setError('Login failed')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 px-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-zinc-100 dark:bg-zinc-800 p-8 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md"
            >
                <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Admin Login</h1>

                {error && (
                    <div className="mb-4 p-3 bg-red-500 text-white rounded-lg text-sm text-center">
                        {error}
                    </div>
                )}

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                    <input
                        {...register('email', { required: true })}
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                    <input
                        {...register('password', { required: true })}
                        id="password"
                        type="password"
                        className="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="••••••••"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    )
}
