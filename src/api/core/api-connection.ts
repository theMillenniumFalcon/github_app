import axios from 'axios'
import { API_URL as baseURL, API_ACCESS_TOKEN } from '@env'
import { readonly } from '../../helpers/readonly'

// Default headers required by the API to avoid
// request limit blocks and use the latest version.
const requestOptions = readonly({
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json',
        Authorization: API_ACCESS_TOKEN && `token ${API_ACCESS_TOKEN}`,
    },
    baseURL,
})

export const API = axios.create(requestOptions)