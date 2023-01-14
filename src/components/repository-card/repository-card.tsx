import { RepositoryDTO } from '@api'
import React, { memo } from 'react'
import { useNavigation } from '../../hooks/useNavigation'
import { SCREENS } from '../../providers/navigation/constants'
import { BookSVG, StartSVG } from '../svg'
import {
    Name,
    Repo,
    Flex,
    Description,
    Badge,
    BadgeText,
    StarText,
} from './styles'

export const RepositoryCard: React.FC<{
    repo: RepositoryDTO
    username: string
}> = memo(({ repo, username }) => {
    const { navigate } = useNavigation()

    return (
        <Repo
            onPress={() =>
                navigate(SCREENS.repository as never, { repo: { ...repo, username } } as never)
            }
        >
            <Flex>
                <BookSVG width="16px" height="20px" />
                <Name>{repo.name}</Name>
            </Flex>
            <Description>{repo.description ?? ('reposText')}</Description>
            <Flex style={{ justifyContent: 'space-between' }}>
                <Badge>
                    <BadgeText>{repo.language}</BadgeText>
                </Badge>
                <Flex>
                    <StartSVG width="16px" />
                    <StarText>{repo.stars}</StarText>
                </Flex>
            </Flex>
        </Repo>
    )
})