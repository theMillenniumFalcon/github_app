import React from 'react'
import { LogBox } from 'react-native'
import { QueryClientProvider } from 'react-query'

import { queryClient } from './query-client'

// Setting a timer for a long period of time...
LogBox.ignoreLogs(['Setting a timer'])

// It makes fetching, caching, synchronizing and updating
// server state in your React applications a breeze.
export const QueryProvider = (props: any) => (
    <QueryClientProvider {...props} client={queryClient} />
)