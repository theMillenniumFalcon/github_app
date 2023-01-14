import { useQuery } from 'react-query'
import { getRepos } from '../../core/api-service'
import { selectors } from '../selectors'

export const useRepos = (username: string, queryKey = 'repos') => {
    useQuery([queryKey, username], async () => getRepos(username), {
        select: selectors.repos,
    })
}