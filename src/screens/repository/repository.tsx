import React, { useLayoutEffect, useMemo } from 'react'
import { useRoute } from '@react-navigation/core'
import { FlatList } from 'react-native-gesture-handler'

import { useNavigation } from '../../hooks/useNavigation'
import { useCommits } from '../../api/hooks/queries/useRepocommits'
import { Spinner } from '../../components/spinner'
import { Content, Heading } from '../../components/typographies/typographies'
import { Container, CommitsContent } from './styles'
import { CommitCard } from '../../components/commit-card'
import { CommitDTO } from '@api'

export const RepositoryScreen = () => {
    const {
        params: { repo },
    }: any = useRoute()

    const { goBack } = useNavigation()

    useLayoutEffect(() => {
        if (!repo?.name || !repo?.username) goBack()
    }, [])

    const { data: commits, isSuccess }: any = useCommits(repo?.username, repo?.name)

    const renderItem = useMemo(
        () => ({ item }) => <CommitCard id={item.id} message={item.message} />,
        [commits]
    )

    const Commits = () => (
        <>
            <Heading>{'reposCommits'}</Heading>
            <CommitsContent>
                <FlatList
                    data={commits}
                    renderItem={renderItem}
                    keyExtractor={item => String((item as CommitDTO).id)}
                    bounces={false}
                    removeClippedSubviews={true}
                    showsVerticalScrollIndicator={false}
                />
            </CommitsContent>
        </>
    )

    const Repository = () => (
        <Container>
            <Content
                title={repo?.name}
                text={repo?.description ?? 'reposText'}
            />
            <Commits />
        </Container>
    )

    return isSuccess ? <Repository /> : <Spinner />
}