import { StackNavigationOptions } from '@react-navigation/stack'

import { readonly } from '../../helpers/readonly'
import { stylesGuide } from '../styles'

export enum SCREENS {
    appStack = 'app.main.stack',
    discover = 'app.discover',
    filters = 'app.modal.filters',
    user = 'app.user',
    repository = 'app.modal.repository',
    noInternet = 'app.internet.connection',
}

export const DEFAULT_SCREENS_OPTIONS = readonly({
    headerBackTitleVisible: false,
    cardStyle: { backgroundColor: 'white' },
    headerStyle: {
        shadowColor: 'transparent',
    },
    headerTitleStyle: {
        fontFamily: stylesGuide.fonts.family.medium,
        fontSize: stylesGuide.utils.parseSize(stylesGuide.fonts.sizes.head),
    },
} as StackNavigationOptions)