import React from 'react'
import { RepositoryDTO, UserDTO } from '@api'

import { RepositoryCard } from '../../components/repository-card'
import { Spinner } from '../../components/spinner'
import { Content } from '../../components/typographies/typographies'
import { useRepos } from '../../api/hooks/queries/useRepos'
import { Container, ReposContainer } from './styles'

export const Repositories: React.FC<{ user: UserDTO }> = ({ user }) => {
    const { data: repos, isSuccess }: any = useRepos(user.username)

    const Repos = () => (
        <>
            {repos?.map((repo: RepositoryDTO) => (
                <RepositoryCard repo={repo} username={user.username} key={repo.name} />
            ))}
        </>
    )

    return (
        <Container>
            <Content title={'repos'} text={'reposText'} />
            <ReposContainer>{isSuccess ? <Repos /> : <Spinner />}</ReposContainer>
        </Container>
    )
}