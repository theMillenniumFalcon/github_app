import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { StyledProvider } from './src/providers/styles'
import { DeviceProvider } from './src/providers/device'
import { Navigation } from './src/providers/navigation'
import { QueryProvider } from './src/providers/react-query'

export default function App() {
  return (
    <DeviceProvider>
      <StatusBar style="dark" />
      <StyledProvider>
        <QueryProvider>
          <Navigation />
        </QueryProvider>
      </StyledProvider>
    </DeviceProvider>
  )
}