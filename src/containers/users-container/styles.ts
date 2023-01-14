import styled, { css } from 'styled-components/native'
import { FlatList } from 'react-native-gesture-handler'

export const Container: any = styled(FlatList)`
  ${({ theme: { colors, gaps } }) => css`
    background-color: ${colors.white};
    padding: 0 ${gaps.normal};
  `}
`