import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { StyledProvider } from './src/providers/styles'
import styled from 'styled-components/native'
import { DeviceProvider } from './src/providers/device'
import { LocalizationProvider, useLanguage } from './src/providers/languages'

const TextStyled = styled.Text`
  color: ${({ theme: { colors } }) => colors.defaultTextColor}
  font-family: ${({ theme: { fonts } }) => fonts.family.regular}
  font-size: ${({ theme: { fonts } }) => fonts.sizes.title}
`

const ViewStyled = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default function App() {
  return (
    <LocalizationProvider>
      <DeviceProvider>
        <StyledProvider>
          <ViewStyled>
            /* <TextStyled>Github App!</TextStyled>
            <StatusBar style="dark" /> */
            <Text />
          </ViewStyled>
        </StyledProvider>
      </DeviceProvider>
    </LocalizationProvider>
  )
}

const Text = () => {
  const { translate } = useLanguage()

  return <TextStyled>{translate('discoverTitle')}</TextStyled>
}