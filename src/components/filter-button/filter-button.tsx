import React, { memo } from 'react'
import { useNavigation } from '../../hooks/useNavigation'
import { SCREENS } from '../../providers/navigation/constants'
import { FilterSVG } from '../svg'
import { StyledFilter } from './styles'

export const FilterButton = memo(() => {
    const { navigate } = useNavigation()

    return (
        <StyledFilter onPress={() => navigate((SCREENS.filters) as never)}>
            <FilterSVG />
        </StyledFilter>
    )
})