import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '@/server/routers/_app';

export const config = {
    runtime: 'nodejs',
};

const trpcHandler = createNextApiHandler({
    router: appRouter,
    createContext: () => ({}),
});

export default trpcHandler;
