import { SCREENS } from '../providers/navigation/constants'
import { useNavigation as useRNavigation } from '@react-navigation/native'

export const useNavigation = () => {
    const { navigate, ...options } = useRNavigation()

    const navigateFromModal = (
        screen: SCREENS,
        params?: { [key: string]: any }
    ) => navigate(SCREENS.appStack as never, { screen, ...params } as never)

    return {
        navigate,
        navigateFromModal,
        ...options,
    }
}