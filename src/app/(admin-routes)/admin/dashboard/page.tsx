'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { api } from "@/trpc/react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { CheckCircle } from "lucide-react"
import useRefetch from "@/hooks/use-refetch"

type Booking = {
    id: number
    createdAt: Date
    updatedAt: Date
    status: string
    service: string
    artist: string
    date: Date
    time: string
    design: string | null
    totalAmount: number
    depositAmount: number
    phone: string | null
}

export default function Dashboard() {
    const [statusFilter, setStatusFilter] = useState<"ALL" | "PENDING" | "VIEWED">("ALL")
    const { data: bookings, isLoading } = api.book.getUserBookings.useQuery()
    const updateBooking = api.book.updateUserBooking.useMutation()
    const router = useRouter()
    const refetch = useRefetch()

    useEffect(() => {
        const token = document.cookie.includes("admin-token")
        if (!token) router.push("/admin/login")
    }, [router])

    const handleLogout = async () => {
        try {
            await fetch("/api/admin/logout", { method: "POST" })
            router.push("/admin/login")
        } catch (error) {
            console.error("Logout failed:", error)
        }
    }

    const handleMarkAsViewed = async (bookingId: number) => {
        await updateBooking.mutateAsync(
            { id: bookingId },
            { onSuccess: () => refetch() }
        )
    }

    const getFilteredBookings = () => {
        if (!bookings) return []

        if (statusFilter === "ALL") return bookings

        if (statusFilter === "VIEWED") {
            const twoDaysAgo = new Date()
            twoDaysAgo.setDate(twoDaysAgo.getDate() - 2)
            return bookings.filter((b) => b.status === "VIEWED" && new Date(b.updatedAt) >= twoDaysAgo)
        }

        return bookings.filter((b) => b.status === statusFilter)
    }

    const BookingCard = ({ booking }: { booking: Booking }) => (
        <Card className="bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{booking.service}</CardTitle>
                    <Badge
                        variant="outline"
                        className={
                            booking.status === "PENDING"
                                ? "bg-yellow-100 text-yellow-700 border-yellow-300 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30"
                                : booking.status === "CANCELLED"
                                    ? "bg-red-100 text-red-700 border-red-300 dark:bg-red-500/20 dark:text-red-400 dark:border-red-500/30"
                                    : booking.status === "VIEWED"
                                        ? "bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-500/20 dark:text-blue-400 dark:border-blue-500/30"
                                        : "bg-green-100 text-green-700 border-green-300 dark:bg-green-500/20 dark:text-green-400 dark:border-green-500/30"
                        }
                    >
                        {booking.status.toLowerCase()}
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                    <span className="text-zinc-500 dark:text-zinc-400">Artist:</span>
                    <span>{booking.artist}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-zinc-500 dark:text-zinc-400">Contact:</span>
                    <span>{booking.phone}</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-zinc-500 dark:text-zinc-400">Date</p>
                        <p>{format(booking.date, "MMM dd, yyyy")}</p>
                    </div>
                    <div>
                        <p className="text-zinc-500 dark:text-zinc-400">Time</p>
                        <p>{format(new Date(`1970-01-01T${booking.time}`), "h:mm a")}</p>
                    </div>
                </div>

                {booking.design && (
                    <div className="pt-2">
                        <p className="text-zinc-500 dark:text-zinc-400 mb-1">Design Preview</p>
                        <img
                            src={booking.design}
                            alt="Tattoo design"
                            className="h-24 w-full object-cover rounded-lg"
                        />
                    </div>
                )}
            </CardContent>

            <CardFooter className="border-t border-zinc-200 dark:border-zinc-700 pt-4 flex justify-between items-center">
                <div className="grid grid-cols-2 gap-4 text-sm flex-1">
                    <div>
                        <p className="text-zinc-500 dark:text-zinc-400">Total</p>
                        <p>₹{booking.totalAmount}</p>
                    </div>
                    <div>
                        <p className="text-zinc-500 dark:text-zinc-400">Deposit</p>
                        <p className="text-red-500 dark:text-red-400">₹{booking.depositAmount}</p>
                    </div>
                </div>

                {booking.status === "PENDING" && (
                    <Button
                        size="sm"
                        variant="secondary"
                        className="ml-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-500/20 dark:text-yellow-400 dark:hover:bg-yellow-500/30"
                        onClick={() => handleMarkAsViewed(booking.id)}
                    >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Mark as Viewed
                    </Button>
                )}
            </CardFooter>
        </Card>
    )

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-900 p-8 text-zinc-900 dark:text-zinc-100">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <Button onClick={handleLogout} variant="destructive" className="hover:bg-red-600 dark:hover:bg-red-700">
                    Logout
                </Button>
            </div>

            <div className="mb-6 flex space-x-4">
                {(["ALL", "PENDING", "VIEWED"] as const).map((status) => (
                    <Button
                        key={status}
                        variant={statusFilter === status ? "default" : "outline"}
                        onClick={() => setStatusFilter(status)}
                        className={`${statusFilter === status
                                ? status === "PENDING"
                                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400"
                                    : status === "VIEWED"
                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400"
                                        : "bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-white"
                                : "text-zinc-500 border-zinc-300 dark:text-zinc-400 dark:border-zinc-700"
                            }`}
                    >
                        {status === "ALL" ? "All Bookings" : status.charAt(0) + status.slice(1).toLowerCase()}
                    </Button>
                ))}
            </div>

            {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((_, i) => (
                        <Card key={i} className="h-64 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 animate-pulse" />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getFilteredBookings().length ? (
                        getFilteredBookings().map((booking) => (
                            <BookingCard key={booking.id} booking={booking} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12 text-zinc-500 dark:text-zinc-400">
                            No {statusFilter.toLowerCase() === "all" ? "" : statusFilter.toLowerCase()} bookings found
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
