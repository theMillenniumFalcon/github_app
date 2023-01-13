import { readonly } from '../../../helpers/readonly'
import defaultLangSource from './messages/english.json'

// An object that contains all translations and is lazily loaded to avoid unnecessary use.
export const translations = readonly({
    en: () => defaultLangSource,
    es: () => require('./messages/spanish.json'),
})

// obtain the type and keys of the JSON files with the messages.
export type TDefaultLangSource = typeof defaultLangSource
export type TDefaultLangKey = keyof TDefaultLangSource
export type TTranslateAttrs = (key: TDefaultLangKey, config?: any) => string