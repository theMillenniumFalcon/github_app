import { UserDTO } from '@api'
import React from 'react'
import {
    Content,
    Counters,
    Picture,
    Counter,
    CounterLabel,
    CounterNumber,
    ProfileInfo,
    ProfileContent,
    Username,
    Bio,
    Name,
} from './styles'

export const ProfileHeader: React.FC<{ user: UserDTO }> = ({
    user: { picture, following, repos, name, bio, username },
}) => {
    return (
        <Content>
            <ProfileContent>
                <Picture source={{ uri: picture }} />
                <Counters>
                    <Counter>
                        <CounterNumber>{following}</CounterNumber>
                        <CounterLabel>{'following'}</CounterLabel>
                    </Counter>
                    <Counter>
                        <CounterNumber>{repos}</CounterNumber>
                        <CounterLabel>{'repos'}</CounterLabel>
                    </Counter>
                </Counters>
            </ProfileContent>
            <ProfileInfo>
                <Name>{name}</Name>
                <Username>@{username}</Username>
                <Bio>{bio}</Bio>
            </ProfileInfo>
        </Content>
    )
}