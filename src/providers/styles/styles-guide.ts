import { readonly } from '../../helpers/readonly'
import { size, parseSize } from './utilities'

// Use it for any color property or backgrounds, it should not have loose colors.
const palette = readonly({
    purple: '#6647F4',
    black: '#15202B',
    gray: '#8899A6',
    grayLight: '#F5F8FA',
    white: '#FFFFFF',
})

const colors = readonly({
    ...palette,
    primary: palette.black,
    secondary: palette.purple,
    defaultTextColor: palette.black,
})

// Use it for any text in the project and keep it consistent.
const fontSizes = readonly({
    title: size(22),
    head: size(16),
    subtitle: size(14),
    text: size(12),
    small: size(10),
})

const fonts = readonly({
    sizes: fontSizes,
    family: {
        bold: 'poppinsBold',
        regular: 'poppinsRegular',
        medium: 'poppinsMedium',
    },
})

// Use for padding, margins, or anything you need to set spaces between elements.
const gaps = readonly({
    small: size(8),
    normal: size(12),
    large: size(16),
    extraLarge: size(24),
    big: size(32),
    extraBig: size(42),
})

// UX-based project style guide used to extend the
// @type {DefaultTheme} type from the @module styled-components library.
export const stylesGuide = readonly({
    colors,
    fonts,
    gaps,
    utils: {
        parseSize,
        size,
        readonly,
    },
})