'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { api } from '@/trpc/react'
import { toast } from 'sonner'
import useRefetch from '@/hooks/use-refetch'

// ... (interfaces & data unchanged)
interface Artist {
    id: number
    name: string
    specialties: string[]
}

interface Service {
    id: number
    name: string
    price?: number
}

interface FormData {
    service: string
    artist: string
    phone: string
    date: Date
    time: string
    design?: string
    totalAmount: number
    depositAmount: number
}

const artists: Artist[] = [
    { id: 1, name: "Satish Sen", specialties: ["Realism", "Portraits"] },
    { id: 2, name: "Devesh Bendre", specialties: ["Geometric", "Blackwork"] },
    { id: 3, name: "Yash Bare", specialties: ["Watercolor", "Floral"] },
]

const services: Service[] = [
    { id: 1, name: "Small Tattoo\n", price: 3000 },
    { id: 2, name: "Medium Tattoo\n", price: 8000 },
    { id: 3, name: "Fresh Black Tattoo (1st sq. inch)\n", price: 700 },
    { id: 4, name: "Fresh Coloured Tattoo (1st sq. inch)\n", price: 1000 },
    { id: 5, name: "Cover-Up Black & Grey (per sq. inch)\n", price: 900 },
    { id: 6, name: "Cover-Up Coloured (per sq. inch)\n", price: 1200 },
    { id: 7, name: "Big Tattoo (per session)\n", price: 4500 },
    { id: 8, name: "Cosmetic Tattoo - Moles/Beauty Spots (per inch)\n", price: 500 },
    { id: 9, name: "Cosmetic Tattoo - Scar Cover Up (per sq. inch)\n", price: 1500 },
    { id: 10, name: "Vitiligo Skin Matching (first sq. inch)\n", price: 2000 },
    { id: 11, name: "Portrait / Animal Tattoo (5-6 inch)\n", price: 8001 },
    { id: 12, name: "Portrait / Animal Tattoo (10-12 inch)\n", price: 20000 }
]

const BookingForm = () => {
    // ... (state & helper logic unchanged)

    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [selectedTime, setSelectedTime] = useState('')
    const [totalAmount, setTotalAmount] = useState(0)
    const [depositAmount, setDepositAmount] = useState(0)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [selectedArtistId, setSelectedArtistId] = useState<number | null>(null)
    const [servicePrice, setServicePrice] = useState<number>(0)
    const [phone, setPhone] = useState('')
    const [errors, setErrors] = useState({
        service: false,
        artist: false,
        phone: '',
        date: false,
        time: false,
        file: ''
    })

    const submitService = api.book.createBooking.useMutation()
    const refetch = useRefetch()

    const timeSlots: string[] = []
    for (let hour = 10; hour <= 20; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            const time = `${hour.toString().padStart(2, '0')}:${minute
                .toString()
                .padStart(2, '0')}`
            timeSlots.push(time)
        }
    }

    const calculateDeposit = (price: number) => {
        const deposit = price * 0.2
        setTotalAmount(price)
        setDepositAmount(deposit)
    }

    const validateForm = () => {
        const newErrors = {
            service: servicePrice === 0,
            artist: !selectedArtistId,
            phone: '',
            date: !selectedDate,
            time: !selectedTime,
            file: ''
        }

        // Phone validation
        const phoneRegex = /^\d{10}$/
        if (!phoneRegex.test(phone)) {
            newErrors.phone = 'Please enter a valid 10-digit phone number'
        }

        // File validation
        if (selectedFile) {
            const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf']
            if (!allowedTypes.includes(selectedFile.type)) {
                newErrors.file = 'Invalid file type (JPG, PNG, PDF only)'
            }
            if (selectedFile.size > 5 * 1024 * 1024) {
                newErrors.file = 'File size exceeds 5MB limit'
            }
        }

        setErrors(newErrors)
        return !Object.values(newErrors).some(error => !!error)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validateForm()) return

        const formData: FormData = {
            service: services.find((s) => s.price === servicePrice)?.name || '',
            artist: artists.find((a) => a.id === selectedArtistId)?.name || '',
            phone: phone,
            date: selectedDate || new Date(),
            time: selectedTime,
            design: selectedFile ? selectedFile.name : undefined,
            totalAmount,
            depositAmount,
        }

        try {
            await submitService.mutateAsync(
                {
                    artist: formData.artist,
                    service: formData.service,
                    date: formData.date,
                    time: formData.time,
                    design: formData.design,
                    totalAmount: formData.totalAmount,
                    depositAmount: formData.depositAmount,
                    phone: formData.phone,
                },
                {
                    onSuccess: () => {
                        toast.success("Form submitted successfully!")
                        refetch()
                        setIsSubmitted(true)
                    },
                    onError: (error) => {
                        toast.error("Form submission failed: " + error.message)
                    }
                }
            )
        } catch (error) {
            toast.error("An unexpected error occurred")
        }
    }

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen bg-white dark:bg-zinc-900 flex items-center justify-center p-4"
            >
                <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-8 max-w-md text-center">
                    <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">Booking Received!</h2>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                        Thank you for choosing Tattitude. We've received your booking request and will
                        confirm your appointment within 24 hours.
                    </p>
                    <div className="bg-zinc-200 dark:bg-zinc-700/50 p-4 rounded-lg">
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            A 20% deposit of ₹{depositAmount} will be required upon confirmation
                        </p>
                    </div>
                </div>
            </motion.div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-white dark:bg-zinc-900 py-20 px-4"
        >
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                        Book Your Ink Session
                    </h1>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Secure your spot with our master artists - 20% deposit required
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Service Selection */}
                    <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl">
                        <label className="block text-zinc-700 dark:text-zinc-300 mb-4 font-medium">
                            Select Tattoo Service
                            <Select
                                onValueChange={(value) => {
                                    const price = parseInt(value)
                                    setServicePrice(price)
                                    calculateDeposit(price)
                                    setErrors(prev => ({ ...prev, service: false }))
                                }}
                            >
                                <SelectTrigger className="w-full mt-2 bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 text-black dark:text-white">
                                    <SelectValue placeholder="Choose a service" />
                                </SelectTrigger>
                                <SelectContent className="bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700">
                                    {services.map((service) => (
                                        <SelectItem
                                            key={service.id}
                                            value={service?.price!.toString()}
                                            className="hover:bg-zinc-200 dark:hover:bg-zinc-700 text-black dark:text-white"
                                        >
                                            {service.name} {service?.price! > 0 && `- ₹${service.price}`}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.service && (
                                <p className="text-red-500 text-sm mt-2">Please select a service</p>
                            )}
                        </label>
                    </div>

                    {/* Artist Selection */}
                    <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl">
                        <label className="block text-zinc-700 dark:text-zinc-300 mb-4 font-medium">
                            Choose Artist
                            <Select
                                onValueChange={(value) => {
                                    setSelectedArtistId(parseInt(value))
                                    setErrors(prev => ({ ...prev, artist: false }))
                                }}
                            >
                                <SelectTrigger className="w-full mt-2 bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 text-black dark:text-zinc-300">
                                    <SelectValue placeholder="Select an artist" />
                                </SelectTrigger>
                                <SelectContent className="bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700">
                                    {artists.map((artist) => (
                                        <SelectItem
                                            key={artist.id}
                                            value={artist.id.toString()}
                                            className="hover:bg-zinc-200 dark:hover:bg-zinc-700 text-black dark:text-white"
                                        >
                                            {artist.name} - {artist.specialties.join(', ')}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.artist && (
                                <p className="text-red-500 text-sm mt-2">Please select an artist</p>
                            )}
                        </label>
                    </div>

                    {/* Phone Number */}
                    <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl">
                        <label className="block text-zinc-700 dark:text-zinc-300 mb-4 font-medium">
                            Phone Number
                            <Input
                                type="text"
                                placeholder="Enter your phone number"
                                required
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value)
                                    setErrors(prev => ({ ...prev, phone: '' }))
                                }}
                                className="w-full mt-2 bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 text-black dark:text-zinc-300"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                            )}
                        </label>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl">
                            <label className="block text-zinc-700 dark:text-zinc-300 mb-4 font-medium">
                                Select Date
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date: Date | null) => {
                                        setSelectedDate(date)
                                        setErrors(prev => ({ ...prev, date: false }))
                                    }}
                                    minDate={new Date()}
                                    dateFormat="MMMM d, yyyy"
                                    className="w-full mt-2 bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-lg p-3 text-black dark:text-zinc-300"
                                    placeholderText="Choose a date"
                                />
                                {errors.date && (
                                    <p className="text-red-500 text-sm mt-2">Please select a date</p>
                                )}
                            </label>
                        </div>

                        <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl">
                            <label className="block text-zinc-700 dark:text-zinc-300 mb-4 font-medium">
                                Select Time
                                <Select
                                    onValueChange={(value) => {
                                        setSelectedTime(value)
                                        setErrors(prev => ({ ...prev, time: false }))
                                    }}
                                >
                                    <SelectTrigger className="w-full mt-2 bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 text-black dark:text-zinc-300">
                                        <SelectValue placeholder="Choose time slot" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700">
                                        {timeSlots.map((time) => (
                                            <SelectItem key={time} value={time} className="hover:bg-zinc-200 dark:hover:bg-zinc-700 text-black dark:text-white">
                                                {time}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.time && (
                                    <p className="text-red-500 text-sm mt-2">Please select a time</p>
                                )}
                            </label>
                        </div>
                    </div>

                    {/* Design Upload */}
                    <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl">
                        <label className="block text-zinc-700 dark:text-zinc-300 mb-4 font-medium">
                            Upload Design Reference
                            <div className="mt-2 flex items-center justify-center w-full border-2 border-dashed border-zinc-300 dark:border-zinc-600 rounded-lg p-8 text-center hover:border-red-500 transition-colors">
                                <Input
                                    type="file"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0]
                                        setSelectedFile(file || null)
                                        setErrors(prev => ({ ...prev, file: '' }))
                                    }}
                                    className="hidden"
                                    id="designUpload"
                                    accept="image/*, .pdf"
                                />
                                <label htmlFor="designUpload" className="cursor-pointer">
                                    {selectedFile ? (
                                        <span className="text-red-500 dark:text-red-400">{selectedFile.name}</span>
                                    ) : (
                                        <>
                                            <span className="text-red-500 dark:text-red-400">Drag & drop or</span>
                                            <span className="text-zinc-600 dark:text-zinc-400 ml-2">
                                                browse files
                                            </span>
                                        </>
                                    )}
                                </label>
                            </div>
                            {errors.file && (
                                <p className="text-red-500 text-sm mt-2">{errors.file}</p>
                            )}
                            <p className="text-sm text-zinc-500 mt-2">
                                Max file size: 5MB (JPG, PNG, PDF)
                            </p>
                        </label>
                    </div>

                    {/* Deposit Information */}
                    <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border-2 border-red-500/30">
                        <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-4">
                            Deposit Information
                        </h3>
                        <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
                            <div className="flex justify-between">
                                <span>Estimated Total:</span>
                                <span>₹{totalAmount}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Required Deposit (20%):</span>
                                <span className="text-red-600 dark:text-red-400">₹{depositAmount}</span>
                            </div>
                            <p className="text-sm text-zinc-600 dark:text-zinc-500 mt-4">
                                * Deposit is non-refundable but applicable to final cost.
                                Remaining balance due at appointment.
                            </p>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-black dark:bg-white hover:bg-red-600 text-white dark:text-black py-6 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02]"
                    >
                        {submitService.isPending ? 'Securing...' : 'Secure Your Session'}
                    </Button>
                </form>
            </div>
        </motion.div>
    )
}

export default BookingForm
