import { useInfiniteQuery } from 'react-query'
import { getUsers } from '../../api/api-service'
import { IListOfUsers } from '@api'
import { REACT_QUERY_BASE_CONFIG } from './hooks-base-config'

// Get the users paged, cache and format the data output.
export const useUsers = (perPage?: number, queryKey = 'users') => {
    const { data, ...opts } = useInfiniteQuery(
        queryKey,
        async ({ pageParam = 0 }) => getUsers(perPage, pageParam),
        {
            ...REACT_QUERY_BASE_CONFIG,
            getNextPageParam: state => Number(state.pop()?.id) + 1 ?? false,
        }
    )

    // React-query returns the data in each iteration under a page key,
    // but in our UI we need to have a single list of users, so I use flat to concatenate the arrays.
    const users: IListOfUsers = data?.pages.flat(Infinity) as any

    return { ...opts, users }
}