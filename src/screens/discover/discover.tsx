import React from 'react'

import { UsersContainer } from '../../containers/users-container'
import { useHeader } from '../../hooks/useHeader'

export const DiscoverScreen = () => {

    useHeader('discoverTitle')

    return <UsersContainer />
}