import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';

export const t = initTRPC.context<Context>().create();

// $lib/trpc/router.ts
// Example backend route with input.
export const router = t.router({
  greeting: t.procedure
    .input((name: unknown) => {
      if (typeof name === 'string') return name;

      throw new Error(`Invalid input: ${typeof name}`);
    })
    .query(async ({ input }) => {
      return `Hello, ${input} from tRPC v10 @ ${new Date().toLocaleTimeString()}`;
    })
});
export type Router = typeof router;

