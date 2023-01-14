import React, { memo } from 'react'
import { useNavigation } from '../../hooks/useNavigation'
import { useLanguage } from '../../providers/languages'
import { SCREENS } from '../../providers/navigation/constants'
import { Container, Name, Picture, Text, Content } from './styles'

interface IUserCardProps {
    data: {
        picture: string
        username: string
        url: string
    }
}

export const UserCard: React.FC<IUserCardProps> = memo(
    ({ data: { picture, username, url } }) => {
        const { navigate } = useNavigation()
        const { translate } = useLanguage()

        return (
            <Container
                onPress={() => navigate(SCREENS.user as never, { picture, username, url } as never)}
            >
                <Picture source={{ uri: picture }} />
                <Content>
                    <Name>
                        @{username} • {translate('github')}
                    </Name>
                    <Text>{url}</Text>
                </Content>
            </Container>
        )
    }
)