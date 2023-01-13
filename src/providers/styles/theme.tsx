import React, { ReactNode, FC, useMemo } from 'react'
import { useFonts } from 'expo-font'
import { fonts } from '../../resources'
import { ThemeProvider } from 'styled-components/native'
import { stylesGuide } from './styles-guide'
import { Spinner } from '../../components/spinner'

export const StyledProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [fontsLoaded] = useFonts(fonts())
    const theme = useMemo(() => stylesGuide, [])

    return fontsLoaded ? (
        <ThemeProvider theme={theme} {...{ children }} />
    ) : (
        <Spinner />
    )
}