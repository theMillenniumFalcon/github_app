import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

// It makes fetching, caching, synchronizing and updating
// server state in your React applications a breeze.
export const QueryProvider = (props: any) => (
    <QueryClientProvider {...props} client={queryClient} />
)