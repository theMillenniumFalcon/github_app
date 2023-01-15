import React, { ReactNode, FC, useMemo } from 'react'
import { ThemeProvider } from 'styled-components/native'
import { useFonts } from 'expo-font'

import { fonts } from '../../resources'
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