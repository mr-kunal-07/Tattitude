import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import bcrypt from 'bcrypt';

export const authRouter = createTRPCRouter({
    login: publicProcedure
        .input(z.object({
            email: z.string().email(),
            password: z.string(),
        }))
        .mutation(async ({ input, ctx }) => {
            const user = await ctx.db.user.findUnique({
                where: { email: input.email },
            });

            if (!user) throw new Error('User not found');
            if (user.role !== 'ADMIN') throw new Error('Unauthorized access');

            // const isValid = await bcrypt.compare(input.password, user.password);
            // if (!isValid) throw new Error('Invalid password');

            if (user.password !== input.password) {
                throw new Error("Invalid password");
            }

            return {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
            };
        }),
});