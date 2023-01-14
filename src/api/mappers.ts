import { IListOfUsers, TUsersMapper } from '@api'

// collection API response with data from all users.
export const usersMapper = (collection: TUsersMapper): IListOfUsers => {
    const mapped: IListOfUsers = collection.map(user => ({
        id: user.id,
        username: user.login,
        picture: user.avatar_url,
        url: user.html_url,
    })) as any

    return mapped
}