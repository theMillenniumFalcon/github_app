import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import * as Localization from 'expo-localization'
import { TDefaultLangKey } from './translations'
import { handleLocalization } from './actions'
import { translate } from './translate'
import { defaultLanguage } from './constants'
import { AppState, AppStateStatus, Platform } from 'react-native'

export const LocalizationContext = React.createContext({
    translate,
    locale: defaultLanguage,
    setLocate: (() => { }) as React.Dispatch<Localization.Localization>,
})

interface localizationProviderProps {
    children: React.ReactNode
}

export const LocalizationProvider: React.FC<localizationProviderProps> = ({ children }) => {
    const appState = useRef(AppState.currentState)
    const [locale, setLocate] = useState(handleLocalization())

    const localization = useMemo(
        () => ({
            translate: (key: TDefaultLangKey, config?: any) =>
                translate(key, { locale: locale.locale, ...config }),
            locale,
            setLocate,
        }),
        [locale.locale]
    )

    useEffect(() => {
        AppState.addEventListener('change', handleAppStatechange)

        return () => {
            AppState.removeEventListener('change', handleAppStatechange)
        }
    }, [])

    const handleAppStatechange = async (state: AppStateStatus) => {
        if (state === appState.current && Platform.OS === 'android') {
            const language = await Localization.getLocalizationAsync()

            if (!language.locale.includes(locale.locale))
                setLocate(handleLocalization(language))
        }
    }

    return <LocalizationContext.Provider value={localization} {...{ children }} />
}

export const useLanguage = () => useContext(LocalizationContext)