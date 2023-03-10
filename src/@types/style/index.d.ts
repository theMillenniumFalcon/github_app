import { stylesGuide } from '../../providers/styles'

declare module 'styled-components' {
    type Theme = typeof stylesGuide
    export interface DefaultTheme extends Theme {
        [key: string]: any
    }
}