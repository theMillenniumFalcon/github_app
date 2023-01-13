import { StatusBar } from 'expo-status-bar'

import { StyledProvider } from './src/providers/styles'
import styled from 'styled-components/native'

// Tests
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
    <StyledProvider>
      <ViewStyled>
        <TextStyled>Github App!</TextStyled>
        <StatusBar style="auto" />
      </ViewStyled>
    </StyledProvider>
  )
}
