import { TTranslateAttrs } from './translations'

type TMemoized = TTranslateAttrs & { cache?: Map<any, any> }

export const memoize = (fn: TTranslateAttrs, resolver?: TTranslateAttrs): Function => {
    const cache = new Map()
    const memoized: TMemoized = function (this: any, _key, config) {
        const key = resolver ? resolver.call(this, _key, config) : _key

        const set = () =>
            cache.set(key, fn.call(this, _key, config)) && cache.get(key)

        return cache.has(key) ? cache.get(key) : set()
    }

    memoized.cache = cache
    return memoized
}