import { StackNavigationOptions as Options } from '@react-navigation/stack'
import React, { useLayoutEffect } from 'react'
import { readonly } from '../helpers/readonly'
import { useNavigation as useRNavigation } from '@react-navigation/core'
import { FilterButton } from '../components/filter-button'
import { Heading } from '../components/typographies'

export const headerOptions = (title: string) =>
    readonly({
        headerLeftContainerStyle: {
            paddingLeft: 12,
        },
        headerRightContainerStyle: {
            paddingRight: 12,
        },
        title: '',
        headerRight: () => <FilterButton />,
        headerLeft: () => <Heading>{title}</Heading>,
    } as Options)

// Update component and settings of react-navigation,
// allowing you to render a new header before mounting your screens.
export const useHeader = (conf: Options | string) => {
    const { setOptions } = useRNavigation()
    const opts: Options =
        typeof conf === 'object' ? conf : headerOptions(conf as string)

    useLayoutEffect(() => {
        setOptions(opts)
    }, [])

    return {
        setOptions,
    }
}