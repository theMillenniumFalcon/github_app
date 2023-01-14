import { readonly } from '../../helpers/readonly'
import { API } from './api-connection'
import { API_PER_PAGE } from '@env'
import { commitsMapper, reposMapper, userMapper, usersMapper } from './api-mappers'

const DEFAULT_PER_PAGE = Number(API_PER_PAGE)

// Domains or resources
const DOMAIN = readonly({
    users: '/users',
    repos: '/repos',
    commits: (username: string, repo: string) =>
        `/repos/${username}/${repo}/commits`,
})

// since Last user ID delivered in the list above,
// this only applies if you want to paginate your data.
export const getUsers = async (per_page = DEFAULT_PER_PAGE, since?: number) => {
    const collection = (
        await API.get(DOMAIN.users, {
            params: {
                per_page,
                since,
            },
        })
    ).data

    return usersMapper(collection)
}

export const getUser = async (username: string) => {
    const user = (await API.get(`${DOMAIN.users}/${username}`)).data

    return userMapper(user)
}

export const getRepos = async (
    username: string,
    per_page = DEFAULT_PER_PAGE
) => {
    const repos = (
        await API.get(`${DOMAIN.users}/${username}/repos`, {
            params: {
                per_page,
            },
        })
    ).data

    return reposMapper(repos)
}

export const getCommits = async (
    username: string,
    repo: string,
    per_page = DEFAULT_PER_PAGE
) => {
    const repos = (
        await API.get(DOMAIN.commits(username, repo), {
            params: {
                per_page,
            },
        })
    ).data

    return commitsMapper(repos)
}