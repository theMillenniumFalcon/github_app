import { UserDTO } from '@api'
import { useRoute } from '@react-navigation/core'
import React, { useLayoutEffect } from 'react'

import { ProfileHeader } from '../../components/profile-header'
import { ScreenContainer } from '../../components/screen-container'
import { Spinner } from '../../components/spinner'
import { Repositories } from '../../containers/repositories'
import { useUser } from '../../api/hooks/queries/useUser'
import { useHeader } from '../../hooks/useHeader'
import { useNavigation } from '../../hooks/useNavigation'

export const UserScreen = () => {
    const {
        params: { username },
    }: any = useRoute()
    const { goBack } = useNavigation()

    useLayoutEffect(() => {
        if (!username) goBack()
    }, [])

    useHeader({ title: username })

    const { data: user, isSuccess }: any = useUser(username)

    const User = () => (
        <ScreenContainer>
            <ProfileHeader user={user as UserDTO} />
            <Repositories user={user as UserDTO} />
        </ScreenContainer>
    )

    return isSuccess ? <User /> : <Spinner />
}