import { CommitDTO, IListOfUsers, RepositoryDTO, UserDTO } from '@api'
import { readonly } from '../../helpers/readonly'

const user = (user: UserDTO) => user

const users = (users: IListOfUsers) => users

const repos = (repos: RepositoryDTO[]) => repos

const commits = (commits: CommitDTO[]) => commits

// The useQuery and useInfiniteQuery hooks now have
// a select option to select or transform parts of the query result.
export const selectors = readonly({ user, users, repos, commits })