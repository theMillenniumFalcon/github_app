import React, { useState, useEffect, createContext, useMemo } from 'react'
import { deviceSettingsInitialState, TDeviceSettingsState } from './state'
import { useColorScheme } from 'react-native'
import { useNetwork } from '../../hooks/useNetwork'

export const DeviceContext = createContext<TDeviceSettingsState>(
    deviceSettingsInitialState
)

interface deviceProviderProps {
    children: React.ReactNode
}

// Provides device settings to the whole application, appearance, 
// internet connection, and other stuff...
export const DeviceProvider: React.FC<deviceProviderProps> = (props, { children }) => {
    const [data, setData] = useState(deviceSettingsInitialState)
    const { isConnected } = useNetwork()
    const scheme = useColorScheme()

    useEffect(() => {
        const appearance = { isDarkMode: scheme === 'dark' }

        setData(state => ({
            ...state,
            network: { isConnected },
            appearance,
        }))
    }, [isConnected, scheme])

    return (
        <DeviceContext.Provider
            value={useMemo(() => data, [isConnected])}
            {...props}
        >
            {children}
        </DeviceContext.Provider>
    )
}