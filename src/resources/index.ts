import { readonly } from '../helpers/readonly';

export const fonts = () =>
    readonly({
        poppinsBold: require('./fonts/poppins-bold.ttf'),
        poppinsMedium: require('./fonts/poppins-medium.ttf'),
        poppinsRegular: require('./fonts/poppins-regular.ttf'),
    })

export const images = readonly({
    noConnection: () => require('./images/empty-states/no-connection.svg'),
})

export const resources = readonly({
    images,
    fonts,
})