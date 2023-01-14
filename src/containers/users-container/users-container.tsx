import { IUserFromList } from '@api'
import React, { useMemo } from 'react'
import { Spinner } from '../../components/spinner'
import { UserCard } from '../../components/user-card'
import { useUsers } from '../../api/hooks/queries/useUsers'
import { Container } from './styles'

export const UsersContainer = () => {
    const { users, fetchNextPage, isSuccess } = useUsers()

    const renderItem = useMemo(
        () => ({ item }) => <UserCard data={item as IUserFromList} />,
        [users]
    )

    return isSuccess ? (
        <Container
            data={users}
            renderItem={renderItem}
            keyExtractor={(item: IUserFromList) => (item as IUserFromList).username}
            onEndReached={() => fetchNextPage()}
            showsVerticalScrollIndicator={false}
            bounces={false}
            removeClippedSubviews={true}
        />
    ) : (
        <Spinner />
    )
}