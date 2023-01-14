import { readonly } from '../../helpers/readonly'
import { API } from './api-connection'
import { API_PER_PAGE } from '@env'
import { usersMapper } from './api-mappers'

// Domains or resources
const DOMAIN = readonly({
    users: '/users',
    repos: '/repos',
    commits: (username: string, repo: string, perPage: number) =>
        `/repos/${username}/${repo}/commits?per_page=${perPage}`,
})

// since Last user ID delivered in the list above, 
// this only applies if you want to paginate your data.
export const getUsers = async (
    perPage: number = Number(API_PER_PAGE),
    since?: number
): Promise<Array<any>> => {
    const collection = (
        await API.get(`${DOMAIN.users}?per_page=${perPage}&since=${since}`)
    ).data

    return usersMapper(collection)
}