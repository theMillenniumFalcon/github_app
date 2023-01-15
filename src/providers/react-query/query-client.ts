import { QueryClient } from 'react-query'

import { readonly } from '../../helpers/readonly'

// 0.5 Hours
const DEFAULT_TIME = 1000 * 60 * 60 * 0.5

const onError = (e: { message: any }) => {
    if (__DEV__)
        console.error(e?.message ?? '[RT-QUERY]: An unexpected error occurred', e)
}

// Set the config on all queries and mutations through the client.
const defaultOptions: any = readonly({
    queries: {
        cacheTime: DEFAULT_TIME,
        staleTime: DEFAULT_TIME,
        retry: 1,
        refetchOnWindowFocus: false,
        notifyOnChangeProps: ['data', 'error'],
        onError,
    },
    mutations: {
        onError,
    },
})

export const queryClient = new QueryClient({ defaultOptions })