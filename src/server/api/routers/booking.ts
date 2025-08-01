import { string, z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';

const bookingSchema = z.object({
    service: z.string().min(1),
    artist: z.string().min(1),
    phone: z.string(),
    date: z.date(),
    time: z.string().min(1),
    design: z.string().optional(),
    totalAmount: z.number().positive(),
    depositAmount: z.number().positive(),
});

export const bookingRouter = createTRPCRouter({
    createBooking: publicProcedure
        .input(bookingSchema)
        .mutation(async ({ input, ctx }) => {
            const { db } = ctx;

            return await db.booking.create({
                data: {
                    service: input.service,
                    artist: input.artist,
                    date: input.date,
                    time: input.time,
                    totalAmount: input.totalAmount,
                    depositAmount: input.depositAmount,
                    design: input.design,
                    phone: input.phone,
                },
            });
        }),

    getUserBookings: publicProcedure.query(async ({ ctx }) => {
        const bookings = await ctx.db.booking.findMany({
            orderBy: { createdAt: 'desc' },
            // where: {
            //     status: 'PENDING'
            // }
        });

        return bookings;
    }),


    updateUserBooking: publicProcedure.input(z.object({
        id: z.number(),
    })).mutation(async ({ ctx, input }) => {

        const { id } = input;

        await ctx.db.booking.update({
            where: {
                id: id
            },
            data: {
                status: 'VIEWED'
            }
        })
    })
});